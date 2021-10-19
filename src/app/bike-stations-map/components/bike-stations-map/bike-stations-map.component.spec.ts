import {BikeStationsMapComponent} from './bike-stations-map.component';
import {of} from 'rxjs';
import {BikeStation} from '../../../models/bike-station';
import {bikeStationsMapActionsIds} from '../../../state/actions/bike-stations-map.actions';

describe('BikeStationsMapComponent', () => {
  it('centerCoords should be set', () => {
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of([
        {
          img: '003.jpeg',
          type: 'anchor',
          id: '01',
          name: 'PLAÇA DELS PATINS',
          lng: 2.659399509,
          lat: 39.56590061
        }
      ]))
    };
    const component: BikeStationsMapComponent = new BikeStationsMapComponent(mockStore as any);

    expect(component.centerCoords).toMatchSnapshot();
  });

  it('bikeStations should be set', done => {
    const bikeStations = [
      {
        img: '003.jpeg',
        type: 'anchor',
        id: '01',
        name: 'PLAÇA DELS PATINS',
        lng: 2.659399509,
        lat: 39.56590061
      }
    ];
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of(bikeStations))
    };
    const component: BikeStationsMapComponent = new BikeStationsMapComponent(mockStore as any);

    component.bikeStations.subscribe((bikeStationsFromstrore: BikeStation[]) => {
      expect(bikeStationsFromstrore).toStrictEqual(bikeStations);
      done();
    });
  });
  it('onMarkerClick: should dispatch showBikeStationInfo action', () => {
    const bikeStations = [
      {
        img: '003.jpeg',
        type: 'anchor',
        id: '01',
        name: 'PLAÇA DELS PATINS',
        lng: 2.659399509,
        lat: 39.56590061
      }
    ];
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of(bikeStations))
    };
    const component: BikeStationsMapComponent = new BikeStationsMapComponent(mockStore as any);
    const bikeStation: BikeStation = {
      img: '003.jpeg',
      type: 'anchor',
      id: '01',
      name: 'PLAÇA DELS PATINS',
      lng: 2.659399509,
      lat: 39.56590061,
      kmToCityCenter: 3
    };
    component.onMarkerClick(bikeStation);

    expect(mockStore.dispatch).toHaveBeenCalledWith({
      payload: bikeStation,
      type: bikeStationsMapActionsIds.showBikeStationInfo
    });
  });
});
