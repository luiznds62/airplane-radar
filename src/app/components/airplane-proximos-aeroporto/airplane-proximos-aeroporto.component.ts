import { Component, Input, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-proximos-aeroporto',
    templateUrl: './airplane-proximos-aeroporto.component.html',
    styleUrls: ['./airplane-proximos-aeroporto.component.css'],
})
export class AirplaneProximosAeroportoComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];
    constructor() {}

    ngOnInit(): void {}
}
