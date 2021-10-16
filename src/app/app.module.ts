import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import * as fromBikeStationsGallery from './state/reducers/bike-stations-gallery.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BikeStationsGalleryEffects} from './state/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BikeStationsGalleryModule} from './bike-stations-gallery/bike-stations-gallery.module';
import {FiltersModule} from './filters/filters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      bikeStationsGallery: fromBikeStationsGallery.bikeStationsGalleryReducer
    }),
    EffectsModule.forRoot([BikeStationsGalleryEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    BikeStationsGalleryModule,
    FiltersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
