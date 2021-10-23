import {createReducer, on} from '@ngrx/store';
import * as BikeStationsMapActions from '../../actions/bike-stations-map.actions';
import {AppState} from '../../../models/app.state';

export const selectSelectedBikeStation = (appState: AppState) => appState.selectedBikeStation;

export const selectedBikeStationReducer = createReducer(
  undefined as unknown,
  on(BikeStationsMapActions.showBikeStationInfo,
    (currentState: any, {selectedBikeStation}) => selectedBikeStation
  ),
  on(BikeStationsMapActions.closeBikeStationInfo, () => undefined)
);
