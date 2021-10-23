import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {deviceLocationRequest} from '../actions/device-location.actions';
import {DeviceLocationService} from '../../services/device-location.service';

@Injectable()
export class DeviceLocationEffects {
  requestDeviceLocation = createEffect(() => this.actions$.pipe(
      ofType(deviceLocationRequest),
      tap(() => this.deviceLocationService.requestDeviceLocation())
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions, private deviceLocationService: DeviceLocationService) {
  }
}
