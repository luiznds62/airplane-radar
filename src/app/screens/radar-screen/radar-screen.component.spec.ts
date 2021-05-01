import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarScreenComponent } from './radar-screen.component';

describe('RadarScreenComponent', () => {
  let component: RadarScreenComponent;
  let fixture: ComponentFixture<RadarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
