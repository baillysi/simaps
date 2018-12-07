import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsMainComponent } from './maps-main/maps-main.component';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MapsDashboardComponent},
  {path: 'main', component: MapsMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
