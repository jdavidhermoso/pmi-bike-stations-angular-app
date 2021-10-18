import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../models/app.state';
import {filter} from '../../../state/actions/filters.actions';
import {DeviceDetectorService} from 'ngx-device-detector';
import {initialBikeStationsState} from '../../../state/reducers';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss']
})
export class FiltersFormComponent {
  public kmToCityCenterControl: FormControl = new FormControl(initialBikeStationsState.filters.kmToCityCenter);
  public nameControl: FormControl = new FormControl(initialBikeStationsState.filters.name);
  public filters: FormGroup = new FormGroup({
    kmToCityCenter: this.kmToCityCenterControl,
    name: this.nameControl,
  });
  public isDesktopDevice = false;
  private filterFormValueChangesSubscription: Subscription | undefined;

  constructor(private store: Store<AppState>, private deviceService: DeviceDetectorService) {
    this.isDesktopDevice = deviceService.isDesktop();
    if (this.isDesktopDevice) {
      this.filterFormValueChangesSubscription = this.filters.valueChanges
        .subscribe(() => {
          this.applyFilters();
        });
    }
  }

  public resetFilters(): void {
    const initialFiltersState = initialBikeStationsState.filters;
    this.nameControl.patchValue(initialFiltersState.name);
    this.kmToCityCenterControl.patchValue(initialFiltersState.kmToCityCenter);

    if (!this.isDesktopDevice) {
      this.applyFilters();
    }
  }

  public applyFilters(): void {
    this.store.dispatch(filter({
        payload: {
          ...this.filters.value
        }
      })
    );
  }
}
