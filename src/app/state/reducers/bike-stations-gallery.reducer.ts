import {createReducer, createSelector, on} from '@ngrx/store';
import * as BikeStationsListActions from '../actions/bike-stations-list.actions';
import {AppState} from '../../models/app.state';
import {BikeStation} from '../../models/bike-station';

export interface BikeStationsState {
  bikeStations: BikeStation[];
}

export const initialBikeStationsState: BikeStationsState = {
  bikeStations: []
};

export const selectBikeStationsGalleryState = (appState: AppState) => appState.bikeStationsGallery;

export const selectBikeStations = createSelector(
  selectBikeStationsGalleryState,
  ({bikeStations}: BikeStationsState) => {
    return bikeStations;
  }
);

export const bikeStationsGalleryReducer = createReducer(
  initialBikeStationsState,
  on(BikeStationsListActions.getBikeStationsSuccess,
    (currentState: BikeStationsState, newState: BikeStationsState) => ({
      ...currentState,
      bikeStations: newState.bikeStations
    })
  )
);
