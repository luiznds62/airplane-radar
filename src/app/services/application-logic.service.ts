import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApplicationLogicService {
    constructor() {}

    /**
     * Retorna o raio
     * @param x Coordenada cartesiana X
     * @param y Coordenada cartesiana Y
     */
    public calculatePolarCoordinatesRadius(x: number, y: number): any {
        // Calculo equivalente a linha abaixo: r = √x² + y²
        return Number(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) || 0;
    }

    /**
     * Retorna o angulo
     * @param x Coordenada cartesiana x
     * @param y Coordenada cartesiana y
     */
    public calculatePolarCoordinatesAngle(x: number, y: number): any {
        // Calculo equivalente a linha abaixo: tag(teta)
        let theta = Number((Math.atan2(y, x) * 180) / Math.PI) || 0;
        if (theta < 0) theta = 360 + theta; // range [0, 360)
        return theta;
    }
}
