import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';
import {ApplicationLogicService} from '../../services/application-logic.service';

@Component({
  selector: 'app-airplane-translandar',
  templateUrl: './airplane-translandar.component.html',
  styleUrls: ['./airplane-translandar.component.css'],
})
export class AirplaneTranslandarComponent implements OnInit {
  @Input() airplanes: Airplane[] = [];
  @Output() changeCollection = new EventEmitter();

  x: any = '';
  y: any = '';

  constructor(private applicationLogicService: ApplicationLogicService) {
  }

  ngOnInit(): void {
  }

  validate() {
    if (!this.x) {
      alert('Preencha o valor de X');
      throw new Error('X não preenchido');
    } else if (!this.y) {
      alert('Preencha o valor de Y');
      throw new Error('Y não preenchido');
    } else if (!this.airplanes.some(airplane => airplane.selected)) {
      alert('Nenhum avião selecionado');
      throw new Error('Sem aviões selecionados');
    }
  }

  translandar() {
    this.validate();
    this.airplanes.forEach(airplane => {
      if (airplane.selected) {
        airplane.x = Number((Number(airplane.x) + Number(this.x)));
        airplane.y = Number((Number(airplane.y) + Number(this.y)));

        // Polar
        airplane.radius = this.applicationLogicService.calculatePolarCoordinatesRadius(airplane.x, airplane.y) || 0;
        airplane.angle = this.applicationLogicService.calculatePolarCoordinatesAngle(airplane.x, airplane.y) || 0;
      }
    });

    this.changeCollection.emit(this.airplanes);
  }
}
