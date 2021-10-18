import {Component} from '@angular/core';

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
}
