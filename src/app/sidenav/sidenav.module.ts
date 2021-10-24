import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent, LanguageSelectorComponent} from './components';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TranslateModule} from '@ngx-translate/core';
import {AppModule} from '../app.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SideNavComponent,
    LanguageSelectorComponent
  ],
  exports: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class SidenavModule {
}
