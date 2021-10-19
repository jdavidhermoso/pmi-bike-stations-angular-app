import {createReducer, createSelector, on} from '@ngrx/store';
import * as BikeStationsListActions from '../../actions/bike-stations-list.actions';
import * as FiltersActions from '../../actions/filters.actions';
import {AppState} from '../../../models/app.state';
import {BikeStation} from '../../../models/bike-station';
import {Filters} from '../../../models/filters';

export interface BikeStationsState {
  stations: BikeStation[];
}

export interface BikeStationsGalleryState {
  bikeStations: BikeStationsState;
  filters: Filters;
}

const initialFiltersState: Filters = {
  search: ''
};

export const initialBikeStationsState: BikeStationsGalleryState = {
  bikeStations: {
    stations: []
  },
  filters: initialFiltersState
};

export const selectBikeStationsGalleryState = (appState: AppState) => appState.bikeStationsGallery;
export const selectFilters = createSelector(
  selectBikeStationsGalleryState,
  ({filters}: BikeStationsGalleryState) => filters
);

export const selectBikeStations = createSelector(
  selectBikeStationsGalleryState,
  selectFilters,
  ({bikeStations, filters}: BikeStationsGalleryState) => {
    return filterBikeStations(bikeStations.stations, filters);
  }
);

export const bikeStationsGalleryReducer = createReducer(
  initialBikeStationsState,
  on(BikeStationsListActions.getBikeStationsSuccess,
    (currentState: BikeStationsGalleryState, {payload}) => ({
      ...currentState,
      bikeStations: {
        stations: payload.stations
      }
    })
  ),
  on(FiltersActions.filter, (currentState: BikeStationsGalleryState, {payload}) => ({
      ...currentState,
      filters: payload,
    })
  )
);

export const filterBikeStations = (bikeStations: BikeStation[], filters: Filters): BikeStation[] => {
  return bikeStations.filter(
    (bikeStation: BikeStation) => filterBikeStationByNameOrAddress(bikeStation.name, bikeStation.fullAddress, filters.search)
  );
};

export const filterBikeStationByNameOrAddress = (bikeStationName: string,
                                                 bikeStationAddress: string,
                                                 searchFilter: string) => {
  return (bikeStationName.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1) ||
    bikeStationAddress.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
};
