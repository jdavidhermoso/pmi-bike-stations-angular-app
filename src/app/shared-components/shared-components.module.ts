import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components';
import { PageHeaderComponent } from './components/page-header/page-header.component';


@NgModule({
    declarations: [CardComponent,  PageHeaderComponent],
  exports: [
    CardComponent,
    PageHeaderComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedComponentsModule {
}
