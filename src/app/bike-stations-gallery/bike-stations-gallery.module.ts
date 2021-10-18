import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BikeStationsListComponent} from './components/bike-stations-list/bike-stations-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BikeStationCardComponent} from './components/bike-station-card/bike-station-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    BikeStationsListComponent,
    BikeStationCardComponent
  ],
  exports: [
    BikeStationsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class BikeStationsGalleryModule {
}
