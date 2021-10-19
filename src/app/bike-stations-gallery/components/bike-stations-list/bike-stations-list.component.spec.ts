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
      kmToCityCenter: 8,
      name: 'Some bike station',
      img: '',
      type: '',
      id: '300',
      lng: 3.3998,
      lat: 2.3273
    });

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
