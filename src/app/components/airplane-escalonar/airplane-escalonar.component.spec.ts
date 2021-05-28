import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneEscalonarComponent } from './airplane-escalonar.component';

describe('AirplaneEscalonarComponent', () => {
  let component: AirplaneEscalonarComponent;
  let fixture: ComponentFixture<AirplaneEscalonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneEscalonarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneEscalonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
