import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getBikeStationsStart} from '../../../state/actions';
import {AppState} from '../../models/app.state';
import {selectBikeStations} from '../../../state/reducers';
import {BikeStation} from '../../models/bike-station';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent {
  public bikeStations: Observable<BikeStation[]>;
  public pageTitle = 'Palma bike sharing station';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getBikeStationsStart());
    this.bikeStations = this.store.pipe(select(selectBikeStations));
  }
}
