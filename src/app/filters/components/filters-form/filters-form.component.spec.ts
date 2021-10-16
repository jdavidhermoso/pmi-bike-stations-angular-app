import {of} from 'rxjs';
import {FiltersFormComponent} from './filters-form.component';

describe('FiltersFormComponent', () => {
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
  let component: FiltersFormComponent;

  beforeEach(() => {
    component = new FiltersFormComponent(mockStore as any);
  });

  it('should dispatch filter', done => {
    component.ngOnInit();
    component.filters.valueChanges.subscribe(() => {
      expect(mockStore.dispatch).toHaveBeenCalled();
      done();
    });
    component.filters.patchValue({
      kmToCityCenter: 2,
      name: 'ADAS',
      onlyWithPicture: false
    });
  });

  it('should reset filters', () => {
    component.ngOnInit();

    component.filters.patchValue({
      kmToCityCenter: 6,
      name: 'FERR',
      onlyWithPicture: true
    });

    component.resetFilters();

    expect(component.filters.value).toMatchSnapshot();
  });
});
