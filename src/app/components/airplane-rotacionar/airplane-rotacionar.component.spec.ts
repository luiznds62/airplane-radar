import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneRotacionarComponent } from './airplane-rotacionar.component';

describe('AirplaneRotacionarComponent', () => {
  let component: AirplaneRotacionarComponent;
  let fixture: ComponentFixture<AirplaneRotacionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneRotacionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneRotacionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
