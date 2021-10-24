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
import {BikeStationsMapModule} from './bike-stations-map';
import {DeviceLocationEffects} from './state/effects/device-location.effects';
import {AppRoutingModule} from './app.routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
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
    BikeStationsMapModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
