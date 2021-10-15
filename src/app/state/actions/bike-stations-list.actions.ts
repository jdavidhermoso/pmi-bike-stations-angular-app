import {createAction, props} from '@ngrx/store';
import {BikeStationsState} from '../reducers';

export const bikeStationsGalleryActionsIds = {
  getBikeStationsStart: '[Bike stations gallery] getBikeStations start',
  getBikeStationsSuccess: '[Bike stations gallery] getBikeStations success',
  getBikeStationsError: '[Bike stations gallery] getBikeStations error'
};

export const getBikeStationsStart = createAction(bikeStationsGalleryActionsIds.getBikeStationsStart);
export const getBikeStationsSuccess = createAction(bikeStationsGalleryActionsIds.getBikeStationsSuccess,
  props<BikeStationsState>());
export const getBikeStationsError = createAction(bikeStationsGalleryActionsIds.getBikeStationsError);
