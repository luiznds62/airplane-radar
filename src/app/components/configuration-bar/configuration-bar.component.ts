import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Airplane} from 'src/app/models/Airplane';
import {ConfigurationBarOptions} from './configuration-bar-options';

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

  constructor() {
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
}
