import { Component, Input, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-translandar',
    templateUrl: './airplane-translandar.component.html',
    styleUrls: ['./airplane-translandar.component.css'],
})
export class AirplaneTranslandarComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];
    constructor() {}

    ngOnInit(): void {}
}
