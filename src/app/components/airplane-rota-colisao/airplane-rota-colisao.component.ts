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

  constructor() {
  }

  ngOnInit(): void {
  }
}
