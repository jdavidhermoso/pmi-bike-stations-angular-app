import {of} from 'rxjs';
import {BikeStationsListComponent} from './bike-stations-list.component';

describe('BikeStationsListComponent', () => {
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
  let component: BikeStationsListComponent;

  beforeEach(() => {
    component = new BikeStationsListComponent(mockStore as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch showBikeStationInfo', () => {
    component.onBikeStationCardClicked({
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
});
