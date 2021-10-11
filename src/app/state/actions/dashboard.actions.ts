import {createAction, props} from '@ngrx/store';
import {BikeStation} from '../../dashboard';

export const dashboardActionsIds = {
  getBikeStationsStart: '[Dashboard] getBikeStations start',
  getBikeStationsSuccess: '[Dashboard] getBikeStations success',
  getBikeStationsError: '[Dashboard] getBikeStations error'
};

export const getBikeStationsStart = createAction(dashboardActionsIds.getBikeStationsStart);
export const getBikeStationsSuccess = createAction(dashboardActionsIds.getBikeStationsSuccess,
  props<{ bikeStations: BikeStation[] }>());
export const getBikeStationsError = createAction(dashboardActionsIds.getBikeStationsError);
