import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../models/app.state';
import {getBikeStationsStart} from '../../../state/actions';
import {selectBikeStations} from '../../../state/reducers';
import {Observable} from 'rxjs';
import {BikeStation} from '../../../models/bike-station';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-bike-stations-list',
  templateUrl: './bike-stations-list.component.html',
  styleUrls: ['./bike-stations-list.component.scss']
})
export class BikeStationsListComponent {
  public bikeStations: Observable<BikeStation[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getBikeStationsStart());
    this.bikeStations = this.store.pipe(select(selectBikeStations));
  }
}
