import {SideNavComponent} from './side-nav.component';
import {of, Subject} from 'rxjs';


describe('SideNavComponent', () => {
  it('isDesktopDevice should be truthy', () => {
    const deviceDetectorMock = {
      isDesktop: () => true
    };
    const routerMock = {
      events: of(true)
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any, routerMock as any);

    expect(component.isDesktopDevice).toBeTruthy();
  });

  it('isDesktopDevice should be falsy', () => {
    const deviceDetectorMock = {
      isDesktop: () => false
    };
    const routerMock = {
      events: of(true)
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any, routerMock as any);

    expect(component.isDesktopDevice).toBeFalsy();
  });

  describe('toggleSideNav', () => {
    const deviceDetectorMock = {
      isDesktop: () => false
    };
    const routerMock = {
      events: of(true)
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any, routerMock as any);
    it('toggleSideNav: should set isSideNaveOpen to falsy', () => {
      component.isSideNaveOpen = true;

      component.toggleSideNav();

      expect(component.isSideNaveOpen).toBeFalsy();
    });
    it('toggleSideNav: should set isSideNaveOpen to truthy', () => {
      component.isSideNaveOpen = false;

      component.toggleSideNav();

      expect(component.isSideNaveOpen).toBeTruthy();
    });
  });

  it('onBackdropClicked: should set isSideNaveOpen to false', () => {
    const deviceDetectorMock = {
      isDesktop: () => false
    };
    const routerMock = {
      events: of(true)
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any, routerMock as any);

    component.isSideNaveOpen = true;

    component.onBackdropClicked();

    expect(component.isSideNaveOpen).toBeFalsy();
  });

  it('router events: should set isSideNaveOpen to false', done => {
    const navigationEvent: Subject<void> = new Subject();

    const deviceDetectorMock = {
      isDesktop: () => false
    };
    const routerMock = {
      events: navigationEvent
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any, routerMock as any);
    component.isSideNaveOpen = true;

    routerMock.events.subscribe(() => {
      expect(component.isSideNaveOpen).toBeFalsy();
      done();
    });
    navigationEvent.next();
  });
});
