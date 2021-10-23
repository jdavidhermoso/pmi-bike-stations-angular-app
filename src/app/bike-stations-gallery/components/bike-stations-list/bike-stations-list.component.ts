import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../models/app.state';
import {selectBikeStations} from '../../../state/reducers';
import {Observable} from 'rxjs';
import {BikeStation} from '../../../models/bike-station';
import {closeBikeStationInfo, showBikeStationInfo} from '../../../state/actions/bike-stations-map.actions';
import {selectSelectedBikeStation} from '../../../state/reducers/selected-bike-station/selected-bike-station.reducer';

@Component({
  selector: 'app-bike-stations-list',
  templateUrl: './bike-stations-list.component.html',
  styleUrls: ['./bike-stations-list.component.scss']
})
export class BikeStationsListComponent {
  public bikeStations: Observable<BikeStation[]>;
  public selectedBikeStation: BikeStation | undefined;

  constructor(private store: Store<AppState>) {
    this.bikeStations = this.store.pipe(select(selectBikeStations));
    this.store.pipe(select(selectSelectedBikeStation)).subscribe((bikeStation: BikeStation | undefined) => {
      this.selectedBikeStation = bikeStation;
    });
  }

  public onBikeStationCardClicked(bikeStation: BikeStation): void {
    this.store.dispatch(showBikeStationInfo({
      selectedBikeStation: bikeStation
    }));
  }

  public onCloseBikeStationInfo(): void {
    this.store.dispatch(closeBikeStationInfo());
  }
}
