import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  const component: HeaderComponent = new HeaderComponent();

  it('should emit toggleSideNavEvent', () => {
    const mock = jest.fn();

    component.toggleSideNavEvent.emit = mock;
    component.toggleSideNav();

    expect(mock).toHaveBeenCalled();
  });
});
