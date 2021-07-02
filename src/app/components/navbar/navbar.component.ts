import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Airplane } from '../../models/Airplane';
import { ApplicationLogicService } from '../../services/application-logic.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() setCollection = new EventEmitter();

  constructor(private applicationLogicService: ApplicationLogicService) {
  }

  ngOnInit(): void {
  }


  getRandomArbitrary(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  deleteAll() {
    this.setCollection.emit([]);
  }

  generateExamples() {
    const airplanes: Airplane[] = [];

    [...Array(10).keys()].forEach(id => {
      const x = this.getRandomArbitrary(-15, 15);
      const y = this.getRandomArbitrary(-15, 15);

      const airplane: Airplane = {
        id: id + 1,
        x,
        y,
        radius: this.applicationLogicService.calculatePolarCoordinatesRadius(x, y),
        angle: this.applicationLogicService.calculatePolarCoordinatesAngle(x, y),
        direction: this.getRandomArbitrary(0, 360),
        speed: this.getRandomArbitrary(0, 100),
        translation: 0,
        selected: false,
      };
      airplanes.push(airplane);
    });

    this.setCollection.emit(airplanes);
  }
}
