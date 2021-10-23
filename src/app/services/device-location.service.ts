import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../models/app.state';
import {deviceLocationSuccess} from '../state/actions/device-location.actions';
import {Location} from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class DeviceLocationService {
  constructor(private store: Store<AppState>) {
  }

  private static degToRad(deg: number): number {
    return deg * Math.PI / 180;
  }

  public static distanceInKmBetweenEarthCoordinates(from: Location, to: Location): string {
    if (!from || !to) {
      return '';
    }

    const earthRadiusKilometers = 6371;
    const dLat = this.degToRad(to.lat - from.lat);
    const dLon = this.degToRad(to.lng - from.lng);

    const fromRadius = this.degToRad(from.lat);
    const toRadius = this.degToRad(to.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(fromRadius) * Math.cos(toRadius);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (earthRadiusKilometers * c).toFixed(2);
  }

  public requestDeviceLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          this.store.dispatch(deviceLocationSuccess({
              deviceLocation: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              }
            })
          );
        });
    }
  }
}
