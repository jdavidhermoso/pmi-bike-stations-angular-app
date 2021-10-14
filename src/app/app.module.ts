import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import * as fromDashboard from './state/reducers/dashboard.reducer';
import {EffectsModule} from '@ngrx/effects';
import {DashboardEffects} from './state/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    StoreModule.forRoot({
      dashboard: fromDashboard.dashboardReducer
    }),
    EffectsModule.forRoot([DashboardEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
