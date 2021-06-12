import { Component, Input, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-escalonar',
    templateUrl: './airplane-escalonar.component.html',
    styleUrls: ['./airplane-escalonar.component.css'],
})
export class AirplaneEscalonarComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];
    constructor() {}

    ngOnInit(): void {}
}
