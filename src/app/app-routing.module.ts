import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTES} from './utils/Routes';
import {RadarScreenComponent} from './screens/radar-screen/radar-screen.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ROUTES.RADAR},
  {path: ROUTES.RADAR, component: RadarScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
