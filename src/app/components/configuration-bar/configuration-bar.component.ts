import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';
import {ConfigurationBarOptions} from './configuration-bar-options';
import {ApplicationLogicService} from '../../services/application-logic.service';

@Component({
  selector: 'app-configuration-bar',
  templateUrl: './configuration-bar.component.html',
  styleUrls: ['./configuration-bar.component.css'],
})
export class ConfigurationBarComponent implements OnInit {
  @ViewChild('buttonRegister') buttonRegister: ElementRef;
  @Output() addAirplane = new EventEmitter();
  @Output() setCollection = new EventEmitter();
  @Input() airplanes: Airplane[] = [];

  functionOptionSelected = '';
  reportMessage = 'Nenhuma informação a exibir';
  showReportNotification = false;

  constructor(private applicationLogicService: ApplicationLogicService) {
  }

  ngOnInit(): void {
    const button: any = document.querySelector('.dropdown');
    button.click((e: any) => {
      e.stopPropagation();
    });
  }

  openAirplaneRegister(): void {
  }

  setOption(name: string) {
    this.functionOptionSelected = name;
  }

  closeRegister(event: any) {
    this.buttonRegister.nativeElement.click();
  }

  new(airplane: Airplane) {
    this.addAirplane.emit(airplane);
  }

  changeCollection(airplanes: Airplane[]) {
    this.setCollection.emit(airplanes);
  }

  changeReport(message: string) {
    this.reportMessage = message;
    this.showReportNotification = true;
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min) + min);
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
