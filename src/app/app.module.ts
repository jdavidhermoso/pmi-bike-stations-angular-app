import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import * as fromBikeStationsGallery from './state/reducers/bike-stations-gallery/bike-stations-gallery.reducer';
import * as fromBikeStationsMap from './state/reducers/bike-stations-map/selected-bike-station.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BikeStationsGalleryEffects} from './state/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BikeStationsGalleryModule} from './bike-stations-gallery/bike-stations-gallery.module';
import {FiltersModule} from './filters/filters.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {BikeStationsMapModule} from './bike-stations-map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      bikeStationsGallery: fromBikeStationsGallery.bikeStationsGalleryReducer,
      selectedBikeStation: fromBikeStationsMap.selectedBikeStationReducer
    }),
    EffectsModule.forRoot([BikeStationsGalleryEffects]),
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
