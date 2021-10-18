import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SideNavComponent} from './side-nav.component';


describe('SideNavComponent', () => {
  it('isDesktopDevice should be truthy', () => {
    const deviceDetectorMock = {
      isDesktop: () => true
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any);

    expect(component.isDesktopDevice).toBeTruthy();
  });

  it('isDesktopDevice should be falsy', () => {
    const deviceDetectorMock = {
      isDesktop: () => false
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any);

    expect(component.isDesktopDevice).toBeFalsy();
  });

  describe('toggleSideNav', () => {
    const deviceDetectorMock = {
      isDesktop: () => false
    };
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any);
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
    const component: SideNavComponent = new SideNavComponent(deviceDetectorMock as any);

    component.isSideNaveOpen = true;

    component.onBackdropClicked();

    expect(component.isSideNaveOpen).toBeFalsy();
  });
});
