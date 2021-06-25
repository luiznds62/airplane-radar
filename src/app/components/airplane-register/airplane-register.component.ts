import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-register',
    templateUrl: './airplane-register.component.html',
    styleUrls: ['./airplane-register.component.css'],
})
export class AirplaneRegisterComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];
    @Output() onCloseDropdown = new EventEmitter<boolean>();

    id = null;
    x = null;
    y = null;
    angle = null;
    speed = null;
    direction = null;
    radius = null;
    translation = null;

    constructor() {}

    ngOnInit(): void {}

    onNoClick(): void {}

    getId() {
        return this.airplanes.length > 0 ? this.airplanes[this.airplanes.length - 1].id + 1 : 0;
    }

    add() {
        let airplane: Airplane = new Airplane();
        airplane.id = this.getId();
        airplane.x = this.x;
        airplane.y = this.y;
        airplane.angle = this.angle || 0;
        airplane.speed = this.speed || 0;
        airplane.translation = this.translation || 0;
        airplane.radius = this.radius || 0;
        airplane.direction = this.direction || 0;
        this.airplanes.push(airplane);
    }
}
