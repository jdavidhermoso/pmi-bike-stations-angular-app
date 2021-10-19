import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../models/app.state';
import {selectBikeStations} from '../../../state/reducers';
import {Observable} from 'rxjs';
import {BikeStation} from '../../../models/bike-station';
import {showBikeStationInfo} from '../../../state/actions/bike-stations-map.actions';

@Component({
  selector: 'app-bike-stations-map',
  templateUrl: './bike-stations-map.component.html',
  styleUrls: ['./bike-stations-map.component.scss']
})
export class BikeStationsMapComponent {
  public centerCoords = {
    lat: 39.575670,
    lng: 2.654020
  };
  public bikeStations: Observable<BikeStation[]>;

  constructor(private store: Store<AppState>) {
    this.bikeStations = this.store.pipe(select(selectBikeStations));
  }

  public onMarkerClick(bikeStation: BikeStation): void {
    this.store.dispatch(showBikeStationInfo({
      payload: bikeStation
    }));
  }
}
