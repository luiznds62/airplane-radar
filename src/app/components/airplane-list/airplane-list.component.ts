import { Component, Input, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-list',
    templateUrl: './airplane-list.component.html',
    styleUrls: ['./airplane-list.component.css'],
})
export class AirplaneListComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];

    currentPage = 0;

    constructor() {}

    ngOnInit(): void {}

    pageChanged(event: any) {}
}
