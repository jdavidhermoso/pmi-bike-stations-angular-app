import {createReducer, createSelector, on} from '@ngrx/store';
import * as BikeStationsMapActions from '../../actions/bike-stations-map.actions';
import {AppState} from '../../../models/app.state';
import {selectDeviceLocation} from '../device-location';
import {BikeStation} from '../../../models/bike-station';
import {Location} from '../../../models/location';
import {DeviceLocationService} from '../../../services/device-location.service';

export const selectSelectedBikeStation = (appState: AppState) => appState.selectedBikeStation;

export const selectDistanceToSelectedBikeStation = createSelector(
  selectSelectedBikeStation,
  selectDeviceLocation,
  (selectedBikeStation: BikeStation, deviceLocation: Location) =>
    DeviceLocationService.distanceInKmBetweenEarthCoordinates(selectedBikeStation, deviceLocation)
);

export const selectedBikeStationReducer = createReducer(
  undefined as unknown,
  on(BikeStationsMapActions.showBikeStationInfo,
    (currentState: any, {selectedBikeStation}) => selectedBikeStation
  ),
  on(BikeStationsMapActions.closeBikeStationInfo, () => undefined)
);
