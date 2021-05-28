import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneRegisterComponent } from './airplane-register.component';

describe('AirplaneRegisterComponent', () => {
  let component: AirplaneRegisterComponent;
  let fixture: ComponentFixture<AirplaneRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
