import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../models/app.state';
import {selectBikeStations} from '../../../state/reducers';
import {Observable} from 'rxjs';
import {BikeStation} from '../../../models/bike-station';
import {closeBikeStationInfo, showBikeStationInfo} from '../../../state/actions/bike-stations-map.actions';
import {selectSelectedBikeStation} from '../../../state/reducers/bike-stations-map/bike-stations-map.reducer';

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
  public selectedBikeStation: BikeStation | undefined;

  constructor(private store: Store<AppState>) {
    this.bikeStations = this.store.pipe(select(selectBikeStations));
    this.store.pipe(select(selectSelectedBikeStation)).subscribe((bikeStation: BikeStation | undefined) => {
      this.selectedBikeStation = bikeStation;
    });
  }

  public onMarkerClick(bikeStation: BikeStation): void {
    this.store.dispatch(showBikeStationInfo({
      payload: bikeStation
    }));
  }

  public onCloseBikeStationInfo(): void {
    this.store.dispatch(closeBikeStationInfo());
  }
}
