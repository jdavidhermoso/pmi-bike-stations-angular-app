import {createReducer, createSelector, on} from '@ngrx/store';
import {BikeStation} from '../../dashboard';
import * as DashboardActions from '../actions/dashboard.actions';
import {AppState} from '../../dashboard/models/UI/app.state';

export interface DashboardState {
  bikeStations: BikeStation[];
}

export const initialDashboardState: DashboardState = {
  bikeStations: []
};

export const selectDashboard = (appState: AppState) => appState.dashboard;

export const selectBikeStations = createSelector(
  selectDashboard,
  ({bikeStations}: DashboardState) => bikeStations
);

export const dashboardReducer = createReducer(
  initialDashboardState,
  on(DashboardActions.getBikeStationsSuccess,
    (state, dashboardState: DashboardState) => ({
      ...state,
      bikeStations: dashboardState.bikeStations
    })
  )
);
