import {BikeStationsGalleryState} from '../state/reducers';
import {BikeStationsMapState} from '../state/reducers/bike-stations-map/bike-stations-map.reducer';

export interface AppState {
  bikeStationsGallery: BikeStationsGalleryState;
  bikeStationsMap: BikeStationsMapState;
}
