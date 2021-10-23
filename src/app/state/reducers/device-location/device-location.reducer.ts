import {createReducer, on} from '@ngrx/store';
import * as DeviceLocationActions from '../../actions/device-location.actions';
import {AppState} from '../../../models/app.state';

export const selectDeviceLocation = (appState: AppState) => appState.deviceLocation;

export const deviceLocationReducer = createReducer(
  undefined as unknown,
  on(DeviceLocationActions.deviceLocationSuccess,
    (currentState: any, {deviceLocation}) => deviceLocation
  )
);
