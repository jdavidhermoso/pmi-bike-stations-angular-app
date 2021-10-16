import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './components/filters/filters.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {FiltersFormComponent} from './components/filters-form/filters-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FiltersComponent,
    FiltersFormComponent
  ],
  exports: [
    FiltersComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonModule,
    ]
})
export class FiltersModule { }
