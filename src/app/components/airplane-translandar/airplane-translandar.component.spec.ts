import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneTranslandarComponent } from './airplane-translandar.component';

describe('AirplaneTranslandarComponent', () => {
  let component: AirplaneTranslandarComponent;
  let fixture: ComponentFixture<AirplaneTranslandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneTranslandarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneTranslandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
