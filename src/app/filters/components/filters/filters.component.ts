import {Component} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  public isDesktopDevice = false;

  constructor(private deviceService: DeviceDetectorService) {
    this.isDesktopDevice = this.deviceService.isDesktop();
  }
}
