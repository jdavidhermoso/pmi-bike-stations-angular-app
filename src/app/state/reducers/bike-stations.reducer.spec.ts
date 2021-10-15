import * as fromBikeStationsGallery from './bike-stations-gallery.reducer';
import {BikeStationsState} from './bike-stations-gallery.reducer';
import {getBikeStationsSuccess} from '../actions';
import {AppState} from '../../models/app.state';

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
      const newState: BikeStationsState = {
        bikeStations: [],
      };

      const action = getBikeStationsSuccess(newState);
      const state = fromBikeStationsGallery.bikeStationsGalleryReducer(initialBikeStationsState, action);

      expect(state).toEqual(newState);
    });
  });

  it('selectBikeStationsState: should return bike stations gallery state', () => {
    const appState: AppState = {
      bikeStationsGallery: {
        bikeStations: [{
          img: '001.jpeg',
          type: 'anchor',
          id: '21',
          name: 'PALEXANDER FLEMING',
          lng: 2.655279636,
          lat: 39.58131563
        },
          {
            img: '001.jpeg',
            type: 'anchor',
            id: '31',
            name: 'PL. MADRID',
            lng: 2.641010284,
            lat: 39.57718104
          }
        ],
      }
    };
    expect(fromBikeStationsGallery.selectBikeStationsGalleryState(appState)).toStrictEqual(appState.bikeStationsGallery);
  });

  it('selectBikeStations: should return bike stations', () => {
    const appState: AppState = {
      bikeStationsGallery: {
        bikeStations: [],
      }
    };
    expect(fromBikeStationsGallery.selectBikeStations(appState)).toStrictEqual(appState.bikeStationsGallery.bikeStations);
  });
});


