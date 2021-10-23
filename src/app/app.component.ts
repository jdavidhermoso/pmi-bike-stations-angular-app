import {Component} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {getBikeStationsStart} from './state/actions';
import {Store} from '@ngrx/store';
import {AppState} from './models/app.state';
import {deviceLocationRequest} from './state/actions/device-location.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDesktopDevice: boolean;


  constructor(private deviceService: DeviceDetectorService, private store: Store<AppState>) {
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.store.dispatch(getBikeStationsStart());
    this.store.dispatch(deviceLocationRequest());
  }


}
