import { Component, Input, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-rotacionar',
    templateUrl: './airplane-rotacionar.component.html',
    styleUrls: ['./airplane-rotacionar.component.css'],
})
export class AirplaneRotacionarComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];
    constructor() {}

    ngOnInit(): void {}
}
