import { Component, OnInit } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';

@Component({
    selector: 'app-airplane-grafico',
    templateUrl: './airplane-grafico.component.html',
    styleUrls: ['./airplane-grafico.component.css'],
})
export class AirplaneGraficoComponent implements OnInit {
    SPRITE_SIZE: number = 10;

    canvaId: string = 'airplaneCanvas';
    context: any = undefined;
    sprite: any = undefined;
    airplanes: Airplane[] = [];

    constructor() {}

    ngOnInit(): void {
        this.sprite = this.getAirplaneSprite();
        this.context = this.getCanva().getContext('2d');
        this.setAirplaneInCanva(new Airplane(51, 51, 0, 0, 0, 0));
    }

    getCanva(): any {
        return document.getElementById(this.canvaId);
    }

    getAirplaneSprite() {
        const image = new Image();
        image.className = 'sprite';
        image.src = 'assets/aeroplane.png';
        return image;
    }

    setAirplaneInCanva(airplane: Airplane) {
        const image = this.getAirplaneSprite();
        image.onload = () => {
            this.context.imageSmoothingEnabled = false;
            this.context.drawImage(image, airplane.x, airplane.y, this.SPRITE_SIZE, this.SPRITE_SIZE);
        };
        //this.context.drawImage(this.sprite, airplane.x, airplane.y, this.SPRITE_SIZE, this.SPRITE_SIZE);
    }
}
