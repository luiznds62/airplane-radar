import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';

@Component({
  selector: 'app-airplane-avioes-proximos',
  templateUrl: './airplane-avioes-proximos.component.html',
  styleUrls: ['./airplane-avioes-proximos.component.css'],
})
export class AirplaneAvioesProximosComponent implements OnInit {
  @Input() airplanes: Airplane[] = [];
  @Output() changeReport = new EventEmitter();

  minDistance: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  validate() {
    if (!this.minDistance) {
      alert('Preencha a distância mínima');
      throw new Error('Distância mínima não preenchida');
    }else if(this.airplanes.length === 1) {
      alert('É necessário existir mais de um avião cadastrado');
      throw new Error('Apenas um avião cadastrado');
    }
  }

  checkNearbyAirplanes() {
    this.validate();
    let hasToLog = false;
    let report = `<p><strong>Aviões com distancia minima de ${this.minDistance}Km com o outro avião: </strong></p>`;

    const nearbyPlane: any = [];

    this.airplanes.forEach(airplane1 => {
      this.airplanes.forEach(airplane2 => {
        const distance = (Math.sqrt(Math.pow(airplane1.x - airplane2.x, 2) +
          Math.pow(airplane1.y - airplane2.y, 2)));

        nearbyPlane.push(String(airplane1.id) + String(airplane2.id));
        if ((distance < this.minDistance) && nearbyPlane.indexOf(String(airplane2.id) + String(airplane1.id))=== -1) {
          if (airplane1.id!==airplane2.id) {
            hasToLog = true;
            const airplaneToReport = `
                <p>Aviões [${airplane1.id},${airplane2.id}] - Distância de ${this.formatNumber(distance)}KM</p>
            `;
            report = report + airplaneToReport;
          }
        }
      });
    });

    if (!hasToLog) {
      report = report + (`Nenhum avião com a distância informada foi encontrado próximo a outro`);
    }

    this.changeReport.emit(report);
    this.clear();
  }

  clear() {
    this.minDistance = '';
  }

  private formatNumber(value: number) {
    return new Intl.NumberFormat('en-us', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value);
  }
}
