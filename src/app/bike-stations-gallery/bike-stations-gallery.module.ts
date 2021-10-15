import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BikeStationsListComponent} from './components/bike-stations-list/bike-stations-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    BikeStationsListComponent
  ],
  exports: [
    BikeStationsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class BikeStationsGalleryModule {
}
