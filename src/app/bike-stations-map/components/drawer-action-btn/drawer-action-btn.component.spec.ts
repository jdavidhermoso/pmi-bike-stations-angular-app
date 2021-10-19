import {DrawerActionBtnComponent} from './drawer-action-btn.component';

describe('DrawerActionBtnComponent', () => {
  let component: DrawerActionBtnComponent;

  it('should routeHref should have default value', () => {
    component = new DrawerActionBtnComponent();
    expect(component.routeHref).toStrictEqual('');
  });

  it('should routeHref should have input value', () => {
    const url = 'https://someurl.com';
    component = new DrawerActionBtnComponent();
    component.routeHref = url;

    expect(component.routeHref).toStrictEqual(url);
  });
});
