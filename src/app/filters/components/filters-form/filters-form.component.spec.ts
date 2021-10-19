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
          img: null,
          id: '09',
          name: 'F. MANUEL HERREROS',
          lng: 2.664034367,
          lat: 39.57458439,
          fullAddress: 'Francesc Manuel de los Herreros, 32 07005 Palma, Illes Balears',
          street: 'Francesc Manuel de los Herreros',
          streetNumber: 32,
          cp: '07005',
          town: 'Palma',
          region: 'Illes Balears'
        },
        {
          img: null,
          id: '41',
          name: 'FÁBRICA',
          lng: 2.637383938,
          lat: 39.57274848,
          fullAddress: 'Comte de Barcelona, 25, 07013 Palma, Illes Balears',
          street: 'Comte de Barcelona',
          streetNumber: 25,
          cp: '07013',
          town: 'Palma',
          region: 'Illes Balears'
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
          img: null,
          id: '47',
          name: 'PL PORTA S CATALINA',
          lng: 2.641439438,
          lat: 39.57113582,
          fullAddress: 'Porta de Santa Catalina, 17, 07012 Palma, Illes Balears',
          street: 'Jaume III',
          streetNumber: 17,
          cp: '07012',
          town: 'Palma',
          region: 'Illes Balears'
        },
        {
          img: null,
          id: '49',
          name: 'PL DE LA REINA',
          lng: 2.645848989,
          lat: 39.56797655,
          fullAddress: 'Antoni Maura, 10, 07012 Palma, Illes Balears',
          street: 'Antoni Maura',
          streetNumber: 10,
          cp: '07012',
          town: 'Palma',
          region: 'Illes Balears'
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
          img: null,
          id: '49',
          name: 'PL DE LA REINA',
          lng: 2.645848989,
          lat: 39.56797655,
          fullAddress: 'Antoni Maura, 10, 07012 Palma, Illes Balears',
          street: 'Antoni Maura',
          streetNumber: 10,
          cp: '07012',
          town: 'Palma',
          region: 'Illes Balears'
        }
      ]))
    };
    const component = new FiltersFormComponent(mockStore as any, deviceDetectorMock as any);

    component.resetFilters();

    expect(component.filters.value).toMatchSnapshot();
  });
});
