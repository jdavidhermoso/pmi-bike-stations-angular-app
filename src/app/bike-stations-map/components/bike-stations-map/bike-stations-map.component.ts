import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../models/app.state';
import {selectBikeStations} from '../../../state/reducers';
import {Observable} from 'rxjs';
import {BikeStation} from '../../../models/bike-station';
import {closeBikeStationInfo, showBikeStationInfo} from '../../../state/actions/bike-stations-map.actions';
import {
  selectDistanceToSelectedBikeStation,
  selectSelectedBikeStation
} from '../../../state/reducers/selected-bike-station/selected-bike-station.reducer';
import {selectDeviceLocation} from '../../../state/reducers/device-location';
import {Location} from '../../../models/location';

@Component({
  selector: 'app-bike-stations-map',
  templateUrl: './bike-stations-map.component.html',
  styleUrls: ['./bike-stations-map.component.scss']
})
export class BikeStationsMapComponent {
  public centerCoords = [
    2.654020,
    39.575670
  ];
  // @ts-ignore
  public bikeStations: BikeStation[];
  public selectedBikeStation: BikeStation | undefined;
  public distanceFromDeviceLocationToSelectedBikeStation: Observable<any>;
  public deviceLocation: Observable<Location>;
  // @ts-ignore
  public map: ol.Map;
  public bikeStationsVector: any;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectBikeStations)).subscribe((bikeStationsList: BikeStation[]) => {
      this.bikeStations = bikeStationsList;
      this.bikeStationsVector = this.getBikeStationsVector();
      this.renderMap();
    });

    this.store.pipe(select(selectSelectedBikeStation)).subscribe((bikeStation: BikeStation | undefined) => {
      this.selectedBikeStation = bikeStation;
    });

    this.distanceFromDeviceLocationToSelectedBikeStation = this.store.pipe(select(selectDistanceToSelectedBikeStation));
    this.deviceLocation = this.store.pipe(select(selectDeviceLocation));
  }

  private renderMap(): void {
    // @ts-ignore
    const bikeLanesVectorSource = new ol.source.Vector({
      url: 'assets/bikes_lanes.kml',
      // @ts-ignore
      format: new ol.format.KML()
    });

    // @ts-ignore
    const bikeLanesVectorLayer = new ol.layer.Vector({
      // @ts-ignore
      source: bikeLanesVectorSource,
    });
    // @ts-ignore
    this.map = new ol.Map({
      target: 'map',
      layers: [
        // @ts-ignore
        new ol.layer.Tile({
          // @ts-ignore
          source: new ol.source.OSM()
        }),
        bikeLanesVectorLayer,
        this.bikeStationsVector
      ],
      // @ts-ignore
      view: new ol.View({
        // @ts-ignore
        center: ol.proj.fromLonLat(this.centerCoords),
        zoom: 14,
        minZoom: 12
      })
    });

    this.map.on('click', (event: any) => {
      const feature = this.map.forEachFeatureAtPixel(event.pixel, (feat: any) => {
        return feat;
      });
      if (feature) {
        const bikeStationId = feature.get('id');
        const bikeStation: BikeStation | undefined =
          this.bikeStations.find((bStation: BikeStation) => bStation.id === bikeStationId) || undefined;

        if (bikeStation) {
          this.store.dispatch(
            showBikeStationInfo({
              selectedBikeStation: bikeStation
            })
          );
        }
      }
    });
  }

  private getBikeStationsVector(): any {
    const bikeStationsFeatures = this.bikeStations.map((bikeStation: BikeStation) => {
      // @ts-ignore
      const iconFeature = new ol.Feature({
        // @ts-ignore
        geometry: new ol.geom.Point(ol.proj.fromLonLat([bikeStation.lng, bikeStation.lat])),
        id: bikeStation.id,
        name: bikeStation.name
      });

      // @ts-ignore
      const iconStyle = new ol.style.Style({

        // @ts-ignore
        image: new ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'assets/bike-station-logo-sm.png'
        })
      });

      iconFeature.setStyle(iconStyle);

      return iconFeature;
    });


    // @ts-ignore
    const bikeStationVectorSource = new ol.source.Vector({
      features: bikeStationsFeatures,
    });

    // @ts-ignore
    return new ol.layer.Vector({
      source: bikeStationVectorSource,
    });
  }

  public onCloseBikeStationInfo(): void {
    this.store.dispatch(closeBikeStationInfo());
  }
}
