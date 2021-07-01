import {Component, OnInit, ViewChild} from '@angular/core';
import {Airplane} from '../../models/Airplane';
import {AirplaneGraficoComponent} from '../../components/airplane-grafico/airplane-grafico.component';

@Component({
  selector: 'app-radar-screen',
  templateUrl: './radar-screen.component.html',
  styleUrls: ['./radar-screen.component.css'],
})
export class RadarScreenComponent implements OnInit {
  @ViewChild('airplanegrafico') graphicComponent: AirplaneGraficoComponent;

  airplanes: Airplane[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  setCollection(airplanes: Airplane[]) {
    this.airplanes = airplanes;
    this.updateChild();
  }

  add(airplane: Airplane) {
    this.airplanes.push(airplane);
    this.updateChild();
  }

  remove(airplane: Airplane) {
    this.airplanes = this.airplanes.filter((x: Airplane) => x.id!==airplane.id);
    this.updateChild();
  }

  updateChild() {
    this.graphicComponent.loadTableData();
  }
}
