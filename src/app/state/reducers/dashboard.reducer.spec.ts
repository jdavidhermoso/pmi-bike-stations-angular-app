import * as fromDashboard from './dashboard.reducer';
import {DashboardState} from './dashboard.reducer';
import {getBikeStationsSuccess} from '../actions';
import {
  bikeStation1, bikeStation2,
  bikeStation3,
  bikeStation4,
} from '../../dashboard/models/UI/mock/bike-stations-ui.mock';

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
        bikeStations: [
          bikeStation1,
          bikeStation3,
        ],
      };

      const action = getBikeStationsSuccess(newState);
      const state = fromDashboard.dashboardReducer(initialDashboardState, action);

      expect(state).toEqual(newState);
    });
  });

  it('selectDashboard: should return dasbhoardState', () => {
    const appState = {
      dashboard: {
        bikeStations: [
          bikeStation1,
          bikeStation2
        ],
      }
    };
    expect(fromDashboard.selectDashboard(appState)).toStrictEqual(appState.dashboard);
  });

  it('selectBikeStations: should return bike stations', () => {
    const appState = {
      dashboard: {
        bikeStations: [
          bikeStation4,
          bikeStation3
        ],
      }
    };
    expect(fromDashboard.selectBikeStations(appState)).toStrictEqual(appState.dashboard.bikeStations);
  });
});


