import {of} from 'rxjs';
import {BikeStationsMapComponent} from './bike-stations-map.component';

describe('BikeStationsMapComponent', () => {

  let component: BikeStationsMapComponent;

  it('should dispatch showBikeStationInfo', () => {
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
    component = new BikeStationsMapComponent(mockStore as any);
    component.onMarkerClick({
      img: null,
      id: '27',
      name: 'PL. PARIS',
      lng: 2.649158,
      lat: 39.584186,
      fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
      street: 'Plaça de París',
      streetNumber: 1,
      cp: '07010',
      town: 'Palma',
      region: 'Illes Balears'
    });

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
  it('should set selectedBikeStation', done => {
    const bikeStation = {
      img: null,
      id: '27',
      name: 'PL. PARIS',
      lng: 2.649158,
      lat: 39.584186,
      fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
      street: 'Plaça de París',
      streetNumber: 1,
      cp: '07010',
      town: 'Palma',
      region: 'Illes Balears'
    };
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of(bikeStation)
      )
    };
    component = new BikeStationsMapComponent(mockStore as any);

    mockStore.pipe().subscribe((selectedBikeStation) => {
      expect(selectedBikeStation).toStrictEqual(bikeStation);
      done();
    });
  });

  it('onCloseBikeStationInfo: should dispatch closeBikeStationInfo', () => {
    const bikeStation = {
      img: null,
      id: '27',
      name: 'PL. PARIS',
      lng: 2.649158,
      lat: 39.584186,
      fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
      street: 'Plaça de París',
      streetNumber: 1,
      cp: '07010',
      town: 'Palma',
      region: 'Illes Balears'
    };
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of(bikeStation)
      )
    };
    component = new BikeStationsMapComponent(mockStore as any);
    component.onCloseBikeStationInfo();

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
