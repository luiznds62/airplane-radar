import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';

@Component({
  selector: 'app-airplane-list',
  templateUrl: './airplane-list.component.html',
  styleUrls: ['./airplane-list.component.css'],
})
export class AirplaneListComponent implements OnInit {
  @Input() airplanes: Airplane[] = [];
  @Output() removeAirplane = new EventEmitter();

  allSelecteds = false;
  currentPage = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  pageChanged(event: any) {
  }

  remove(airplane: Airplane) {
    setTimeout(() => this.removeAirplane.emit(airplane), 100);
  }

  checkSelectAll() {
    this.airplanes.forEach(airplane => {
      airplane.selected = this.allSelecteds;
    });
  }
}
