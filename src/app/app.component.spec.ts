import {AppComponent} from './app.component';

const deviceDetectorMock = {
  isDesktop: () => true
};

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent(deviceDetectorMock as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
