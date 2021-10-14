import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DashboardContainerComponent
} from './components';
import {SharedComponentsModule} from '../shared-components';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [DashboardContainerComponent],
  exports: [
    DashboardContainerComponent
  ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        HttpClientModule,
        FormsModule,
        MatSliderModule
    ]
})
export class DashboardModule {
}
