import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneRotaColisaoComponent } from './airplane-rota-colisao.component';

describe('AirplaneRotaColisaoComponent', () => {
  let component: AirplaneRotaColisaoComponent;
  let fixture: ComponentFixture<AirplaneRotaColisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneRotaColisaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneRotaColisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
