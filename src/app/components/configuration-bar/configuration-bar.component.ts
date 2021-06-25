import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Airplane } from 'src/app/models/Airplane';
import { ConfigurationBarOptions } from './configuration-bar-options';

@Component({
    selector: 'app-configuration-bar',
    templateUrl: './configuration-bar.component.html',
    styleUrls: ['./configuration-bar.component.css'],
})
export class ConfigurationBarComponent implements OnInit {
    @ViewChild('buttonRegister') buttonRegister: ElementRef;
    @Input() airplanes: Airplane[] = [];

    showDropdown: boolean = true;
    OPTIONS = ConfigurationBarOptions;
    functionOptionSelected: String = '';

    constructor() {}

    ngOnInit(): void {
        let button: any = document.querySelector('.dropdown');
        button.click((e: any) => {
            e.stopPropagation();
        });
    }

    openAirplaneRegister(): void {}

    setOption(name: String) {
        this.functionOptionSelected = name;
    }

    closeRegister(event: any) {
        this.buttonRegister.nativeElement.click();
    }
}
