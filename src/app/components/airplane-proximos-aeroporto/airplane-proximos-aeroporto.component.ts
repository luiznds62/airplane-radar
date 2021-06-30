import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';

@Component({
  selector: 'app-airplane-proximos-aeroporto',
  templateUrl: './airplane-proximos-aeroporto.component.html',
  styleUrls: ['./airplane-proximos-aeroporto.component.css'],
})
export class AirplaneProximosAeroportoComponent implements OnInit {
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
    }
  }

  getNearbyAirport() {
    this.validate();
    let hasToLog = false;
    let report = `<p><strong>Aviões com distancia minima de ${this.minDistance}Km com o aeroporto: </strong></p>`;

    this.airplanes.forEach(airplane => {
      const airplaneRadius = (Math.sqrt(Math.pow(airplane.x, 2) + Math.pow(airplane.y, 2)));

      if (airplaneRadius < this.minDistance) {
        hasToLog = true;
        const airplaneToReport = `
          <p>ID ${airplane.id} - Distância de ${this.formatNumber(airplaneRadius)}</p>
        `;
        report = report + airplaneToReport;
      }
    });

    if (!hasToLog) {
      report = report + (`Nenhum avião com a distância informada foi encontrado próximo ao aeroporto`);
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
