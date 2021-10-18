import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BikeStationsMapComponent} from './components';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    BikeStationsMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ]
})
export class BikeStationsMapModule {
}
