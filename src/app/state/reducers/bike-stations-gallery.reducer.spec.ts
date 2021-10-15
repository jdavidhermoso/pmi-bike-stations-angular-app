import * as fromBikeStationsGallery from './bike-stations-gallery.reducer';
import {
  BikeStationsGalleryState,
  filterBikeStationByName,
  filterBikeStations,
  filterDistanceToCenter
} from './bike-stations-gallery.reducer';
import {getBikeStationsSuccess} from '../actions';
import {AppState} from '../../models/app.state';
import {filter} from '../actions/filters.actions';

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
          kmToCityCenter: 10,
          onlyWithPicture: false,
          name: ''
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
          kmToCityCenter: 10,
          onlyWithPicture: false,
          name: 'VALLDEMOSSA'
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
          kmToCityCenter: 10,
          name: '',
          onlyWithPicture: false
        }
      }
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
          onlyWithPicture: false,
          kmToCityCenter: 10,
          name: ''
        }
      }
    };
    expect(fromBikeStationsGallery.selectBikeStations(appState)).toStrictEqual(appState.bikeStationsGallery.bikeStations.stations);
  });
});

it('filterDistanceToCenter: should return falsy because bike station is filtered', () => {
  expect(
    filterDistanceToCenter({
      img: '',
      type: '',
      id: '99',
      name: 'Some bike station',
      lng: 8.3,
      lat: 4.5,
      kmToCityCenter: 3.4
    }, 2)
  ).toBeFalsy();
});

it('filterBikeStationByName: should return truthy because bike station name matches filter name', () => {
  expect(
    filterBikeStationByName('Some bike station', 'sOmE')
  ).toBeTruthy();
});

it('filterBikeStations: should return only one bike station', () => {
  expect(
    filterBikeStations([
      {
        img: '001.jpeg',
        type: 'anchor',
        id: '61',
        name: 'PLAÇA PONT',
        lng: 2.633678,
        lat: 39.570342,
        kmToCityCenter: 10
      },
      {
        img: '001.jpeg',
        type: 'anchor',
        id: '70',
        name: 'CTRA. VALLDEMOSSA',
        lng: 2.650011,
        lat: 39.587861,
        kmToCityCenter: 8
      },
      {
        img: '001.jpeg',
        type: 'anchor',
        id: '77',
        name: 'SON COSTA - SON FORTEZA',
        lng: 2.6661,
        lat: 39.584114,
        kmToCityCenter: 4
      }
    ], {
      kmToCityCenter: 5,
      name: 'SON FORTEZA',
      onlyWithPicture: false
    })
  ).toMatchSnapshot();
});


