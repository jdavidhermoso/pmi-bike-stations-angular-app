import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getBikeStationsStart} from '../../../state/actions';
import {AppState} from '../../models/UI/app.state';
import {selectBikeStations} from '../../../state/reducers';
import {BikeStation} from '../../models';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  public bikeStations: BikeStation[] = [];
  public pageTitle = 'Barcelona Bike Stations';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getBikeStationsStart());
    this.store.pipe(select(selectBikeStations)).subscribe((bikeStations: BikeStation[]) => {
      this.bikeStations = bikeStations;
    });
  }
}
