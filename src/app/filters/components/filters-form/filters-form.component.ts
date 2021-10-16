import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../models/app.state';
import {filter, resetFilters} from '../../../state/actions/filters.actions';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BikeStation} from '../../../models/bike-station';
import {Filters} from '../../../models/filters';
import {selectBikeStations, selectFilters} from '../../../state/reducers';

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss']
})
export class FiltersFormComponent implements OnInit {
  public kmToCityCenterControl: FormControl = new FormControl(10);
  public nameControl: FormControl = new FormControl('');
  public onlyWithPictureControl: FormControl = new FormControl(false);
  public filters: FormGroup = new FormGroup({
    kmToCityCenter: this.kmToCityCenterControl,
    name: this.nameControl,
    onlyWithPicture: this.onlyWithPictureControl
  });

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.filters.valueChanges
      .subscribe(() => {
        this.store.dispatch(filter({
            payload: {
              ...this.filters.value,
              onlyWithPicture: false,
            }
          })
        );
      });
  }

  public resetFilters(): void {
    this.nameControl.patchValue('');
    this.onlyWithPictureControl.patchValue(false);
    this.kmToCityCenterControl.patchValue(10);
  }
}
