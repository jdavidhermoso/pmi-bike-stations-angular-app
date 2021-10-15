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
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
