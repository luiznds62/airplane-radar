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

    ngOnInit(): void {
        const airplane: Airplane = {
            id: 1,
            x: 1,
            y: 1,
            radius: 0,
            angle: 0,
            direction: 0,
            speed: 0,
            translation: 0,
            selected: false,
        };
        this.airplanes.push(airplane);
    }

    remove(airplane: Airplane) {
        this.airplanes = this.airplanes.filter((x: Airplane) => x.id !== airplane.id);
    }
}
