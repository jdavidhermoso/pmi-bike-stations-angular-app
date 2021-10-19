import {createReducer, createSelector, on} from '@ngrx/store';
import * as BikeStationsMapActions from '../../actions/bike-stations-map.actions';
import {AppState} from '../../../models/app.state';
import {BikeStation} from '../../../models/bike-station';

export interface BikeStationsMapState {
  selectedBikeStation: BikeStation | undefined;
}

export const initialBikeStationsMapState: BikeStationsMapState = {
  selectedBikeStation: undefined
};

export const selectBikeStationsMapState = (appState: AppState) => appState.bikeStationsMap;

export const selectSelectedBikeStation = createSelector(
  selectBikeStationsMapState,
  ({selectedBikeStation}: BikeStationsMapState) => selectedBikeStation
);

export const bikeStationsMapReducer = createReducer(
  initialBikeStationsMapState,
  on(BikeStationsMapActions.showBikeStationInfo,
    (currentState: BikeStationsMapState, {payload}) => ({
      ...currentState,
      selectedBikeStation: payload
    })
  ),
  on(BikeStationsMapActions.closeBikeStationInfo, (currentState: BikeStationsMapState) => ({
    ...currentState,
    selectedBikeStation: undefined
  }))
);
