import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneAvioesProximosComponent } from './airplane-avioes-proximos.component';

describe('AirplaneAvioesProximosComponent', () => {
  let component: AirplaneAvioesProximosComponent;
  let fixture: ComponentFixture<AirplaneAvioesProximosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneAvioesProximosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneAvioesProximosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
