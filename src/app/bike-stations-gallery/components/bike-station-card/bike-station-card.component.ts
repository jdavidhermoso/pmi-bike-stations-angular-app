import {Component, Input} from '@angular/core';
import {BikeStation} from '../../../models/bike-station';

@Component({
  selector: 'app-bike-station-card',
  templateUrl: './bike-station-card.component.html',
  styleUrls: ['./bike-station-card.component.scss']
})
export class BikeStationCardComponent {
  @Input()
  bikeStation: BikeStation | undefined;
}
