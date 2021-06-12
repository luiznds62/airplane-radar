import { Component, OnInit } from '@angular/core';
import { Airplane } from '../../models/Airplane';

@Component({
    selector: 'app-radar-screen',
    templateUrl: './radar-screen.component.html',
    styleUrls: ['./radar-screen.component.css'],
})
export class RadarScreenComponent implements OnInit {
    airplanes: Airplane[] = [];

    constructor() {}

    ngOnInit(): void {}
}
