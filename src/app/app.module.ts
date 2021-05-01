import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RadarScreenComponent} from './screens/radar-screen/radar-screen.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MaterialModule} from './utils/MaterialModule';
import { ConfigurationBarComponent } from './components/configuration-bar/configuration-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RadarScreenComponent,
    NavbarComponent,
    ConfigurationBarComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
