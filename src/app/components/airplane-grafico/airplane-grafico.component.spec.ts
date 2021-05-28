import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneGraficoComponent } from './airplane-grafico.component';

describe('AirplaneGraficoComponent', () => {
  let component: AirplaneGraficoComponent;
  let fixture: ComponentFixture<AirplaneGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
