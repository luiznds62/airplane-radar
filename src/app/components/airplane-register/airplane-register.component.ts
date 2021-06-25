import { Component, Inject, Input, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';
import { ApplicationLogicService } from 'src/app/services/application-logic.service';

@Component({
    selector: 'app-airplane-register',
    templateUrl: './airplane-register.component.html',
    styleUrls: ['./airplane-register.component.css'],
})
export class AirplaneRegisterComponent implements OnInit {
    @Input() airplanes: Airplane[] = [];

    id: any = '';
    x: any = '';
    y: any = '';
    angle: any = '';
    speed: any = '';
    direction: any = '';
    radius: any = '';
    translation: any = '';

    constructor(private applicationLogicService: ApplicationLogicService) {}

    ngOnInit(): void {}

    onNoClick(): void {}

    getId() {
        return this.airplanes.length > 0 ? this.airplanes[this.airplanes.length - 1].id + 1 : 0;
    }

    public calculatePolarCoordinates() {
        this.radius = this.applicationLogicService.calculatePolarCoordinatesRadius(Number(this.x), Number(this.y));
        this.angle = this.applicationLogicService.calculatePolarCoordinatesAngle(Number(this.x), Number(this.y));
    }
    public calculateCartesianCoordinates() {

        //Tratamento de angulos problematicos
        switch (Number(this.angle)) {
            //Caso possuir angulo 0, o 'x' varia de acordo com o raio
            case 0:
            case 360:
                this.x = this.radius;
                this.y = 0;
                break;
            case 90:
                //Caso possuir angulo 90, o 'y' varia de acordo com o raio
                this.y = this.radius;
                this.x = 0;
                break;
            case 180:
                this.y = 0;
                this.x = this.radius * -1;
                break;
            default:
                // Seta os valores default
                this.angle = this.angle || 0;
                this.radius = this.radius || 0;

                // Calcula os dados coordenadas cartesianas
                // Calculo equivalentes:
                // raio * cos(angulo)
                this.x = Number((this.radius * Math.cos(this.angle / (180 / Math.PI))).toFixed(2)) || 0;
                // raio * sen(angulo)
                this.y = Number((this.radius * Math.sin(this.angle / (180 / Math.PI))).toFixed(2)) || 0;
        }
    }

    add() {
        let airplane: Airplane = new Airplane();

        if (this.x) {
            this.calculatePolarCoordinates();
        } else {
            this.calculateCartesianCoordinates();
        }

        airplane.id = this.getId();
        airplane.x = this.x || 0;
        airplane.y = this.y || 0;
        airplane.angle = this.angle || 0;
        airplane.speed = this.speed || 0;
        airplane.translation = this.translation || 0;
        airplane.radius = this.radius || 0;
        airplane.direction = this.direction || 0;
        this.airplanes.push(airplane);
        this.clear();
    }

    clear() {
        this.id = '';
        this.x = '';
        this.y = '';
        this.angle = '';
        this.speed = '';
        this.direction = '';
        this.radius = '';
        this.translation = '';
    }
}
