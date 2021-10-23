import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BikeStation} from '../../../models/bike-station';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-bike-station-info-drawer',
  templateUrl: './bike-station-info-drawer.component.html',
  styleUrls: ['./bike-station-info-drawer.component.scss']
})
export class BikeStationInfoDrawerComponent {
  @Input()
  public bikeStation: BikeStation | undefined;

  @Input()
  public distanceFromDeviceLocationToSelectedBikeStation = '';

  @Output()
  public closeInfoDrawer: EventEmitter<void> = new EventEmitter<void>();

  public isDesktopDevice = false;

  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktopDevice = this.deviceDetectorService.isDesktop();
  }

  public onBikeDirectionsClick(): void {
    if (this.bikeStation) {
      window.open(`https://www.google.es/maps/dir/39.598099,2.6788515/${this.bikeStation.lat},${this.bikeStation.lng}/data=!3m1!4b1!4m2!4m1!3e1`, '_blank');
    }
  }
}
