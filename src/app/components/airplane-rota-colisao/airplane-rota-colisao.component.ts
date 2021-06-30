import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';

@Component({
  selector: 'app-airplane-rota-colisao',
  templateUrl: './airplane-rota-colisao.component.html',
  styleUrls: ['./airplane-rota-colisao.component.css'],
})
export class AirplaneRotaColisaoComponent implements OnInit {
  @Input() airplanes: Airplane[] = [];
  @Output() changeReport = new EventEmitter();

  minTime: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  validate() {
    if (!this.minTime) {
      alert('Preencha o tempo mínimo');
      throw new Error('Tempo mínimo não preenchido');
    } else if (this.airplanes.length===1) {
      alert('É necessário existir mais de um avião cadastrado');
      throw new Error('Apenas um avião cadastrado');
    }
  }

  checkCollision() {
    this.validate();
    let hasToLog = false;
    let report = `<p><strong>Aviões com tempo mínimo de ${this.minTime}s com o outro avião: </strong></p>`;

    const trackCollision: any = [];

    // Percorre todos os aviões
    this.airplanes.forEach(airplane => {
      // Percorre o restantes dos aviões
      this.airplanes.forEach(nextAirplane => {
        // Se for o mesmo avião, não realiza o calculo
        if (airplane.id!==nextAirplane.id) {

          // Adiciona no array para controle de não repetição de calculo
          trackCollision.push(String(airplane.id) + String(nextAirplane.id));

          // Se não foi calculado a distancia de um avião para outro
          if (trackCollision.indexOf(String(nextAirplane.id) + String(airplane.id))=== -1) {
            // Calcula os componentes de velocidade do Avião 1
            const Vx1 = Number(airplane.speed) * Number((Math.cos(airplane.direction / (180 / Math.PI))));
            const Vy1 = Number(airplane.speed) * Number((Math.sin(airplane.direction / (180 / Math.PI))));

            // Calcula os componentes de velocidade do Avião 2
            const Vx2 = Number(nextAirplane.speed) * Number((Math.cos(nextAirplane.direction / (180 / Math.PI))));
            const Vy2 = Number(nextAirplane.speed) * Number((Math.sin(nextAirplane.direction / (180 / Math.PI))));

            // Variaveis para controle de igualdade nas funções de tempo
            let XequalInTime = true;
            let YequalInTime = true;

            // Variaveis para controle de valores em função do tempo
            let px1 = -999;
            let px2 = 999;

            // Validação especifica para valores que são 0 e 0 em X ou Y nos avioes
            if ((Number(Vx2)===0) && (Number(Vx1)===0)) {
              // Se as funções são iguais
              if (Number(nextAirplane.x)===Number(airplane.x)) {
                px1 = 1;
                XequalInTime = true;
              } else {
                XequalInTime = false;
              }
            }

            // Validação especifica para valores que são 0 e 0 em X ou Y nos avioes
            if ((Number(Vy2)===0) && (Number(Vy1)===0)) {
              // Se as funções são iguais
              if (Number(nextAirplane.y)===Number(airplane.y)) {
                px2 = 1;
                YequalInTime = true;
              } else {
                YequalInTime = false;
              }
            }

            // Realiza o calculo da função em relação do tempo
            px1 = px1!==1 ? (Number(nextAirplane.x) + Number(Vx2)) / (Number(airplane.x) + Number(Vx1)):px1;
            px2 = px2!==1 ? (Number(nextAirplane.y) + Number(Vy2)) / (Number(airplane.y) + Number(Vy1)):px2;

            const firstCalc = Number(px1) > Number(px2) ? Number(px1):Number(px2);
            const lastCalc = Number(px1) > Number(px2) ? Number(px2):Number(px1);

            // Verifica se os tempos são iguais
            if (
              ((Number((Number(firstCalc) - (Number(lastCalc) < 0 ? Number(lastCalc) * -1:Number(lastCalc)))) < 0.03) &&
                (Number((Number(firstCalc) - (Number(lastCalc) < 0 ? Number(lastCalc) * -1:Number(lastCalc)))) > -0.03)) &&
              (XequalInTime && YequalInTime)
            ) {
              // Verifica se o tempo esta de acordo com o minimo
              if (px1 < this.minTime) {
                hasToLog = true;
                const xColision = (Number(airplane.x) + Number(Vx1) * Number(px1));
                const yColision = (Number(airplane.y) + Number(Vy1) * Number(px1));

                const airplaneToReport = `
                  <p>ID ${airplane.id} - Distância de</p>
                `;

                report = report + airplaneToReport;
              }
            }
          }
        }
      });
    });

    if (!hasToLog) {
      report = report + (`Nenhum avião em rota de colisão no tempo informado`);
    }

    this.changeReport.emit(report);
    this.clear();
  }

  clear() {
    this.minTime = '';
  }

  private formatNumber(value: number) {
    return new Intl.NumberFormat('en-us', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value);
  }
}
