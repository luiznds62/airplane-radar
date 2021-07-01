import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';
import {ApplicationLogicService} from '../../services/application-logic.service';

@Component({
  selector: 'app-airplane-rotacionar',
  templateUrl: './airplane-rotacionar.component.html',
  styleUrls: ['./airplane-rotacionar.component.css'],
})
export class AirplaneRotacionarComponent implements OnInit {
  @Input() airplanes: Airplane[] = [];
  @Output() changeCollection = new EventEmitter();

  x: any = '';
  y: any = '';
  angle: any = '';

  constructor(private applicationLogicService: ApplicationLogicService) {
  }

  ngOnInit(): void {
  }

  validate() {
    if (this.x && !this.y) {
      alert('Preencha o valor de Y');
      throw new Error('X não preenchido');
    } else if (!this.x && this.y) {
      alert('Preencha o valor de X');
      throw new Error('Y não preenchido');
    } else if (!this.airplanes.some(airplane => airplane.selected)) {
      alert('Nenhum avião selecionado');
      throw new Error('Sem aviões selecionados');
    }
  }

  rotacionar() {
    this.validate();

    // Calcula o cos(B) e sen(B) de acordo com o angulo preenchido
    const cos = Number((Math.cos(this.angle / (180 / Math.PI))));
    const sen = Number((Math.sin(this.angle / (180 / Math.PI))));

    // Percorre todos os dados da grid
    this.airplanes.forEach(airplane => {
      if (!airplane.selected) {
        return;
      }

      // Armazena pois os valores se alteram
      const x = Number(airplane.x) - Number(this.x);
      const y = Number(airplane.y) - Number(this.y);

      // Função equivalente as linhas abaixos
      // x' = x.cos(B) - y.sen(B)
      airplane.x = (x * cos) - (y * sen);
      // y' = y.sen(B) + x.cos(B)
      airplane.y = (x * sen) + (y * cos);

      // Volta para os pontos com o calculo de rotação feito
      airplane.x = Number((airplane.x + Number(this.x)));
      airplane.y = Number((airplane.y + Number(this.y)));

      // Calcular polar
      airplane.radius = this.applicationLogicService.calculatePolarCoordinatesRadius(airplane.x, airplane.y) || 0;
      airplane.angle = this.applicationLogicService.calculatePolarCoordinatesAngle(airplane.x, airplane.y) || 0;
    });

    this.clear();
    this.changeCollection.emit(this.airplanes);
  }

  clear() {
    this.x = '';
    this.y = '';
    this.angle = '';
  }
}
