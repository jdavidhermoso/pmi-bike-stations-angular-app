import {Component} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {getBikeStationsStart} from './state/actions';
import {select, Store} from '@ngrx/store';
import {AppState} from './models/app.state';
import {selectSelectedBikeStation} from './state/reducers/bike-stations-map/bike-stations-map.reducer';
import {BikeStation} from './models/bike-station';
import {closeBikeStationInfo} from './state/actions/bike-stations-map.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDesktopDevice: boolean;
  public selectedBikeStation: BikeStation | undefined;

  constructor(private deviceService: DeviceDetectorService, private store: Store<AppState>) {
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.store.dispatch(getBikeStationsStart());
    this.store.pipe(select(selectSelectedBikeStation)).subscribe((bikeStation: BikeStation | undefined) => {
      this.selectedBikeStation = bikeStation;
    });
  }

  public onCloseBikeStationInfo(): void {
    this.store.dispatch(closeBikeStationInfo());
  }
}
