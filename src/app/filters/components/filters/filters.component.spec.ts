import {FiltersComponent} from './filters.component';

const deviceDetectorMock = {
  isDesktop: () => true
};

describe('FiltersComponent', () => {
  let component: FiltersComponent;

  beforeEach(() => {
    component = new FiltersComponent(deviceDetectorMock as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
