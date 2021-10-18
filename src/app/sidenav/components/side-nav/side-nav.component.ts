import {Component} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public isDesktopDevice = false;
  public isSideNaveOpen = false;

  constructor(private deviceDetectorService: DeviceDetectorService, private router: Router) {
    this.isDesktopDevice = this.deviceDetectorService.isDesktop();
    router.events.subscribe(() => {
      this.isSideNaveOpen = false;
    });
  }

  public toggleSideNav(): void {
    this.isSideNaveOpen = !this.isSideNaveOpen;
  }

  public onBackdropClicked(): void {
    this.isSideNaveOpen = false;
  }
}
