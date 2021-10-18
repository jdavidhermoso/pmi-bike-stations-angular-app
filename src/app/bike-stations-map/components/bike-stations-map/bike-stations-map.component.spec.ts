import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStationsMapComponent } from './bike-stations-map.component';

describe('BikeStationsMapComponent', () => {
  let component: BikeStationsMapComponent;
  let fixture: ComponentFixture<BikeStationsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeStationsMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
