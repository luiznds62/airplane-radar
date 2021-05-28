import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneProximosAeroportoComponent } from './airplane-proximos-aeroporto.component';

describe('AirplaneProximosAeroportoComponent', () => {
  let component: AirplaneProximosAeroportoComponent;
  let fixture: ComponentFixture<AirplaneProximosAeroportoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneProximosAeroportoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneProximosAeroportoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
