import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {HeaderModule} from '../header/header.module';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    SideNavComponent
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
    HeaderModule,
    MatListModule
  ]
})
export class SidenavModule { }
