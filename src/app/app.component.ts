import {Component} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDesktopDevice: boolean;

  constructor(private deviceService: DeviceDetectorService) {
    this.isDesktopDevice = this.deviceService.isDesktop();
  }
}
