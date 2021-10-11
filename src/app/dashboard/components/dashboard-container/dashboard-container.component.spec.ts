import {DashboardContainerComponent} from './dashboard-container.component';
import {of} from 'rxjs';
import {bikeStationsDataMock} from '../../models/UI/mock/bike-stations-ui.mock';

describe('DashboardContainerComponent', () => {
  const mockStore = {
    dispatch: jest.fn(),
    pipe: jest.fn(() => of(bikeStationsDataMock))
  };
  let component: DashboardContainerComponent;

  beforeEach(() => {
    component = new DashboardContainerComponent(mockStore as any);
  });

  it('should create', () => {
    component.ngOnInit();

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
