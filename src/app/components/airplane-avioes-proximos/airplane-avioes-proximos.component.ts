import { Component, Input, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-avioes-proximos',
    templateUrl: './airplane-avioes-proximos.component.html',
    styleUrls: ['./airplane-avioes-proximos.component.css'],
})
export class AirplaneAvioesProximosComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];
    constructor() {}

    ngOnInit(): void {}
}
