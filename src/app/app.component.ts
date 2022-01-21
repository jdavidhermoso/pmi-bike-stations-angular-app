import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {getBikeStationsStart} from './state/actions';
import {Store} from '@ngrx/store';
import {AppState} from './models/app.state';
import {deviceLocationRequest} from './state/actions/device-location.actions';
import {AppTourService} from './services/app-tour/app-tour.service';

declare var ol: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDesktopDevice: boolean;


  constructor(private deviceService: DeviceDetectorService,
              private store: Store<AppState>,
              private appTourService: AppTourService,
  ) {
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.store.dispatch(getBikeStationsStart());
    this.store.dispatch(deviceLocationRequest());
  }

  public ngOnInit(): void {
    this.appTourService.startAppTour();
  }
}
