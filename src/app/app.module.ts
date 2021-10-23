import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import * as fromBikeStationsGallery from './state/reducers/bike-stations-gallery/bike-stations-gallery.reducer';
import * as fromSelectedBikeStation from './state/reducers/selected-bike-station/selected-bike-station.reducer';
import * as fromDeviceLocation from './state/reducers/device-location/device-location.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BikeStationsGalleryEffects} from './state/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BikeStationsGalleryModule} from './bike-stations-gallery/bike-stations-gallery.module';
import {FiltersModule} from './filters/filters.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {BikeStationsMapModule} from './bike-stations-map';
import {DeviceLocationEffects} from './state/effects/device-location.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      bikeStationsGallery: fromBikeStationsGallery.bikeStationsGalleryReducer,
      selectedBikeStation: fromSelectedBikeStation.selectedBikeStationReducer,
      deviceLocation: fromDeviceLocation.deviceLocationReducer
    }),
    EffectsModule.forRoot([BikeStationsGalleryEffects, DeviceLocationEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    BikeStationsGalleryModule,
    FiltersModule,
    SidenavModule,
    AppRoutingModule,
    RouterModule,
    BikeStationsMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
