import * as fromBikeStationsMap from './bike-stations-map.reducer';
import {BikeStationsMapState} from './bike-stations-map.reducer';
import {closeBikeStationInfo, showBikeStationInfo} from '../../actions/bike-stations-map.actions';
import {AppState} from '../../../models/app.state';

describe('bikeStationsMapReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const {initialBikeStationsMapState} = fromBikeStationsMap;
      const action = {
        type: 'Unexistant action',
      };
      const state = fromBikeStationsMap.bikeStationsMapReducer(initialBikeStationsMapState, action);

      expect(state).toBe(initialBikeStationsMapState);
    });
  });
  it('should set selectedBikeStation', () => {
    const {initialBikeStationsMapState} = fromBikeStationsMap;
    const selectedBikeStation = {
      img: null,
      id: '27',
      name: 'PL. PARIS',
      lng: 2.649158,
      lat: 39.584186,
      fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
      street: 'Plaça de París',
      streetNumber: 1,
      cp: '07010',
      town: 'Palma',
      region: 'Illes Balears'
    };
    const newState: BikeStationsMapState = {
      selectedBikeStation
    };

    const action = showBikeStationInfo({payload: selectedBikeStation});
    const state = fromBikeStationsMap.bikeStationsMapReducer(initialBikeStationsMapState, action);

    expect(state).toStrictEqual(newState);
  });

  it('closeBikeStationInfo: should set selectedBikeStation to undefined', () => {
    const {initialBikeStationsMapState} = fromBikeStationsMap;

    const action = closeBikeStationInfo();
    const state = fromBikeStationsMap.bikeStationsMapReducer(initialBikeStationsMapState, action);

    expect(state.selectedBikeStation).toStrictEqual(undefined);
  });

  it('selectSelectedBikeStation: should return seleted bike station state', () => {
    const appState: AppState = {
      bikeStationsGallery: {
        bikeStations: {
          stations: [{
            img: null,
            id: '55',
            name: 'PL. SANTA EULALIA',
            lng: 2.650655508,
            lat: 39.56914268,
            fullAddress: 'Plaça de Santa Eulàlia, 9, 07001 Palma, Illes Balears',
            street: 'Plaça de Santa Eulàlia',
            streetNumber: 9,
            cp: '07001',
            town: 'Palma',
            region: 'Illes Balears'
          },
            {
              img: null,
              id: '13',
              name: 'PARC DE ESTACIONS',
              lng: 2.655408382,
              lat: 39.57602331,
              fullAddress: 'Marquès de la Fontsanta, 3, 07005 Palma, Illes Balears',
              street: 'Marquès de la Fontsanta',
              streetNumber: 3,
              cp: '07005',
              town: 'Palma',
              region: 'Illes Balears'
            }
          ]
        },
        filters: {
          search: ''
        }
      },
      bikeStationsMap: {
        selectedBikeStation: {
          img: null,
          id: '13',
          name: 'PARC DE ESTACIONS',
          lng: 2.655408382,
          lat: 39.57602331,
          fullAddress: 'Marquès de la Fontsanta, 3, 07005 Palma, Illes Balears',
          street: 'Marquès de la Fontsanta',
          streetNumber: 3,
          cp: '07005',
          town: 'Palma',
          region: 'Illes Balears'
        }
      },
    };
    expect(fromBikeStationsMap.selectSelectedBikeStation(appState)).toStrictEqual(appState.bikeStationsMap.selectedBikeStation);
  });

});
