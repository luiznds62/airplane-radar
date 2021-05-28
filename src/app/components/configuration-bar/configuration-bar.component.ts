import { Component, OnInit } from '@angular/core'
import { ConfigurationBarOptions } from './configuration-bar-options'

@Component({
    selector: 'app-configuration-bar',
    templateUrl: './configuration-bar.component.html',
    styleUrls: ['./configuration-bar.component.css'],
})
export class ConfigurationBarComponent implements OnInit {
    OPTIONS = ConfigurationBarOptions
    functionOptionSelected: String = ''

    constructor() {}

    ngOnInit(): void {}

    openAirplaneRegister(): void {}

    setOption(name: String) {
        this.functionOptionSelected = name
    }
}
