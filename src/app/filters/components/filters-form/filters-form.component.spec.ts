import {of} from 'rxjs';
import {FiltersFormComponent} from './filters-form.component';

describe('FiltersFormComponent', () => {
  describe('mobile', () => {
    const deviceDetectorMock = {
      isDesktop: () => false
    };
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
    const component = new FiltersFormComponent(mockStore as any, deviceDetectorMock as any);

    it('isDesktopDevice should be false', () => {
      expect(component.isDesktopDevice).toBeFalsy();
    });
    it('filters should not be dispatched', done => {
      component.filters.valueChanges.subscribe(() => {
        expect(mockStore.dispatch).not.toHaveBeenCalled();
        done();
      });

      component.filters.patchValue({
        kmToCityCenter: 9,
        name: 'sant',
      });
    });

    it('resetFilters: filter action should be dispatched', () => {
      component.resetFilters();

      expect(mockStore.dispatch).toHaveBeenCalled();
    });

    it('applyFilters: filter action should be dispatched', () => {
      component.resetFilters();

      expect(mockStore.dispatch).toHaveBeenCalled();
    });
  });
  describe('desktop', () => {
    const deviceDetectorMock = {
      isDesktop: () => true
    };
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
    const component = new FiltersFormComponent(mockStore as any, deviceDetectorMock as any);

    it('isDesktopDevice should be true', () => {
      expect(component.isDesktopDevice).toBeTruthy();
    });
    it('filters should be dispatched', done => {
      component.filters.valueChanges.subscribe(() => {
        expect(mockStore.dispatch).toHaveBeenCalled();
        done();
      });

      component.filters.patchValue({
        kmToCityCenter: 9,
        name: 'sant',
      });
    });
  });
  it('resetFilters: form control should have initial state values', () => {
    const deviceDetectorMock = {
      isDesktop: () => true
    };
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
    const component = new FiltersFormComponent(mockStore as any, deviceDetectorMock as any);

    component.resetFilters();

    expect(component.filters.value).toMatchSnapshot();
  });
});
