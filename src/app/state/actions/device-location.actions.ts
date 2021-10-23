import {createAction, props} from '@ngrx/store';

export const deviceLocationActionsIds = {
  request: '[Device location] request',
  success: '[Device location] success',
  error: '[Device location] error',
};

export const deviceLocationRequest = createAction(deviceLocationActionsIds.request);

export const deviceLocationSuccess = createAction(deviceLocationActionsIds.success,
  props<{ deviceLocation: any }>());
export const deviceLocationError = createAction(deviceLocationActionsIds.error);
