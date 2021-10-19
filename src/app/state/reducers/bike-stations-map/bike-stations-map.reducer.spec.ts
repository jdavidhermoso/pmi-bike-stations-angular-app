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
      img: '001.jpeg',
      type: 'anchor',
      id: '31',
      name: 'PL. MADRID',
      lng: 2.641010284,
      lat: 39.57718104,
      kmToCityCenter: 4
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
            img: '001.jpeg',
            type: 'anchor',
            id: '21',
            name: 'PALEXANDER FLEMING',
            lng: 2.655279636,
            lat: 39.58131563,
            kmToCityCenter: 3.5
          },
            {
              img: '001.jpeg',
              type: 'anchor',
              id: '31',
              name: 'PL. MADRID',
              lng: 2.641010284,
              lat: 39.57718104,
              kmToCityCenter: 4
            }
          ]
        },
        filters: {
          kmToCityCenter: 20,
          name: ''
        }
      },
      bikeStationsMap: {
        selectedBikeStation: {
          img: '001.jpeg',
          type: 'anchor',
          id: '21',
          name: 'PALEXANDER FLEMING',
          lng: 2.655279636,
          lat: 39.58131563,
          kmToCityCenter: 3.5
        }
      },
    };
    expect(fromBikeStationsMap.selectSelectedBikeStation(appState)).toStrictEqual(appState.bikeStationsMap.selectedBikeStation);
  });

});
