import {createReducer, createSelector, on} from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';
import {AppState} from '../../dashboard/models/app.state';
import {BikeStation} from '../../dashboard/models/bike-station';

export interface DashboardState {
  bikeStations: BikeStation[];
}

export const initialDashboardState: DashboardState = {
  bikeStations: []
};

export const selectDashboard = (appState: AppState) => appState.dashboard;

export const selectBikeStations = createSelector(
  selectDashboard,
  ({bikeStations}: DashboardState) => {
    return bikeStations;
  }
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
