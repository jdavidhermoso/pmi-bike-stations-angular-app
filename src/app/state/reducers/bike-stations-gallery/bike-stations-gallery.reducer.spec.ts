import * as fromBikeStationsGallery from './bike-stations-gallery.reducer';
import {
  BikeStationsGalleryState,
  filterBikeStationByNameOrAddress,
  filterBikeStations,
} from './bike-stations-gallery.reducer';
import {getBikeStationsSuccess} from '../../actions';
import {AppState} from '../../../models/app.state';
import {filter} from '../../actions/filters.actions';

describe('bikeStationsGalleryReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const {initialBikeStationsState} = fromBikeStationsGallery;
      const action = {
        type: 'Unexistant action',
      };
      const state = fromBikeStationsGallery.bikeStationsGalleryReducer(initialBikeStationsState, action);

      expect(state).toBe(initialBikeStationsState);
    });
  });

  describe('getBikeStationsSuccess action', () => {
    it('should retrieve data of deployed apps and update the state', () => {
      const {initialBikeStationsState} = fromBikeStationsGallery;
      const newState: BikeStationsGalleryState = {
        bikeStations: {
          stations: []
        },
        filters: {
          search: ''
        }
      };

      const action = getBikeStationsSuccess({
        payload: newState.bikeStations
      });
      const state = fromBikeStationsGallery.bikeStationsGalleryReducer(initialBikeStationsState, action);

      expect(state).toEqual(newState);
    });
  });

  describe('filter action', () => {
    it('should return filtered bike stations list', () => {
      const {initialBikeStationsState} = fromBikeStationsGallery;
      const newState: BikeStationsGalleryState = {
        bikeStations: {
          stations: []
        },
        filters: {
          search: 'VALLDEMOSSA'
        }
      };

      const action = filter({
        payload: newState.filters
      });
      const state = fromBikeStationsGallery.bikeStationsGalleryReducer(initialBikeStationsState, action);

      expect(state).toEqual(newState);
    });
  });

  it('selectBikeStationsState: should return bike stations gallery state', () => {
    const appState: AppState = {
      bikeStationsGallery: {
        bikeStations: {
          stations: [
            {
              img: '',
              id: '16',
              name: 'PARC DE SA RIERA',
              lng: 2.644529343,
              lat: 39.5815637,
              fullAddress: 'Jesus, 21, 07010 Palma, Islas Baleares',
              street: 'Jesus',
              streetNumber: 21,
              cp: '07010',
              town: 'Palma',
              region: 'Illes Balears'
            },
            {
              img: null,
              id: '24',
              name: 'BLANQUERNA-SALLENT',
              lng: 2.651245594,
              lat: 39.57809894,
              fullAddress: 'Blanquerna, 2, 07003 Palma, Islas Baleares',
              street: 'Blanquerna',
              streetNumber: 2,
              cp: '07003',
              town: 'Palma',
              region: 'Illes Balears'
            }
          ]
        },
        filters: {
          search: ''
        }
      },
      selectedBikeStation: {
        selectedBikeStation: undefined
      },
    };
    expect(fromBikeStationsGallery.selectBikeStationsGalleryState(appState)).toStrictEqual(appState.bikeStationsGallery);
  });

  it('selectBikeStations: should return bike stations', () => {
    const appState: AppState = {
      bikeStationsGallery: {
        bikeStations: {
          stations: []
        },
        filters: {
          search: ''
        }
      },
      selectedBikeStation: {
        selectedBikeStation: undefined
      },
    };
    expect(fromBikeStationsGallery.selectBikeStations(appState)).toStrictEqual(appState.bikeStationsGallery.bikeStations.stations);
  });
});

it('filterBikeStationByName: should return truthy because bike station name matches filter name', () => {
  expect(
    filterBikeStationByNameOrAddress('Some bike station', 'Jesus, 21, 07010 Palma, Islas Baleares', 'jesus')
  ).toBeTruthy();
});

it('filterBikeStations: should return only one bike station', () => {
  expect(
    filterBikeStations([
      {
        img: null,
        id: '16',
        name: 'PARC DE SA RIERA',
        lng: 2.644529343,
        lat: 39.5815637,
        fullAddress: 'Jesus, 21, 07010 Palma, Islas Baleares',
        street: 'Jesus',
        streetNumber: 21,
        cp: '07010',
        town: 'Palma',
        region: 'Illes Balears'
      },
      {
        img: null,
        id: '24',
        name: 'BLANQUERNA-SALLENT',
        lng: 2.651245594,
        lat: 39.57809894,
        fullAddress: 'Blanquerna, 2, 07003 Palma, Islas Baleares',
        street: 'Blanquerna',
        streetNumber: 2,
        cp: '07003',
        town: 'Palma',
        region: 'Illes Balears'
      },
      {
        img: null,
        id: '77',
        name: 'SON COSTA - SON FORTEZA',
        lng: 2.6661,
        lat: 39.584114,
        fullAddress: 'Argelaga, 26, 07005 Palma, Illes Balears',
        street: 'Argelaga',
        streetNumber: 26,
        cp: '07005',
        town: 'Palma',
        region: 'Illes Balears'
      }
    ], {
      search: 'SON FORTEZA'
    })
  ).toMatchSnapshot();
});


