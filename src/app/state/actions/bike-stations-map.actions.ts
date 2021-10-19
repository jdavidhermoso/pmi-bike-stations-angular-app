import {createAction, props} from '@ngrx/store';
import {BikeStation} from '../../models/bike-station';

export const bikeStationsMapActionsIds = {
  showBikeStationInfo: '[Bike stations map] show bike station info',
  closeBikeStationInfo: '[Bike stations info] close bike station info'
};

export const showBikeStationInfo = createAction(bikeStationsMapActionsIds.showBikeStationInfo,
  props<{ payload: BikeStation }>());

export const closeBikeStationInfo = createAction(bikeStationsMapActionsIds.closeBikeStationInfo);
