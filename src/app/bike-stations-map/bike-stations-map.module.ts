import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BikeStationsMapComponent} from './components';
import {GoogleMapsModule} from '@angular/google-maps';
import {BikeStationInfoDrawerComponent} from './components/station-info-drawer/bike-station-info-drawer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {DrawerActionBtnComponent} from './components/drawer-action-btn/drawer-action-btn.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BikeStationsMapComponent,
    BikeStationInfoDrawerComponent,
    DrawerActionBtnComponent
  ],
  exports: [
    BikeStationInfoDrawerComponent
  ],
    imports: [
        CommonModule,
        GoogleMapsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        MatTooltipModule,
        TranslateModule
    ]
})
export class BikeStationsMapModule {
}
