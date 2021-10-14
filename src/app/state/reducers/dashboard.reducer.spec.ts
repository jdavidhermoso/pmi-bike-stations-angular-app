import * as fromDashboard from './dashboard.reducer';
import {DashboardState} from './dashboard.reducer';
import {getBikeStationsSuccess} from '../actions';

describe('dasbhoardReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const {initialDashboardState} = fromDashboard;
      const action = {
        type: 'Unexistant action',
      };
      const state = fromDashboard.dashboardReducer(initialDashboardState, action);

      expect(state).toBe(initialDashboardState);
    });
  });

  describe('getBikeStationsSuccess action', () => {
    it('should retrieve data of deployed apps and update the state', () => {
      const {initialDashboardState} = fromDashboard;
      const newState: DashboardState = {
        bikeStations: [],
      };

      const action = getBikeStationsSuccess(newState);
      const state = fromDashboard.dashboardReducer(initialDashboardState, action);

      expect(state).toEqual(newState);
    });
  });

  it('selectDashboard: should return dasbhoardState', () => {
    const appState = {
      dashboard: {
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
    expect(fromDashboard.selectDashboard(appState)).toStrictEqual(appState.dashboard);
  });

  it('selectBikeStations: should return bike stations', () => {
    const appState = {
      dashboard: {
        bikeStations: [],
      }
    };
    expect(fromDashboard.selectBikeStations(appState)).toStrictEqual(appState.dashboard.bikeStations);
  });
});


