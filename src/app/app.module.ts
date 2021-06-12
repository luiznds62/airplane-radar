import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadarScreenComponent } from './screens/radar-screen/radar-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfigurationBarComponent } from './components/configuration-bar/configuration-bar.component';
import { AirplaneRegisterComponent } from './components/airplane-register/airplane-register.component';
import { AirplaneTranslandarComponent } from './components/airplane-translandar/airplane-translandar.component';
import { AirplaneEscalonarComponent } from './components/airplane-escalonar/airplane-escalonar.component';
import { AirplaneRotacionarComponent } from './components/airplane-rotacionar/airplane-rotacionar.component';
import { AirplaneProximosAeroportoComponent } from './components/airplane-proximos-aeroporto/airplane-proximos-aeroporto.component';
import { AirplaneRotaColisaoComponent } from './components/airplane-rota-colisao/airplane-rota-colisao.component';
import { AirplaneAvioesProximosComponent } from './components/airplane-avioes-proximos/airplane-avioes-proximos.component';
import { AirplaneGraficoComponent } from './components/airplane-grafico/airplane-grafico.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        RadarScreenComponent,
        NavbarComponent,
        ConfigurationBarComponent,
        AirplaneRegisterComponent,
        AirplaneTranslandarComponent,
        AirplaneEscalonarComponent,
        AirplaneRotacionarComponent,
        AirplaneProximosAeroportoComponent,
        AirplaneRotaColisaoComponent,
        AirplaneAvioesProximosComponent,
        AirplaneGraficoComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
