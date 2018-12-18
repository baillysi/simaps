import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapsModule } from './maps.module';
import { MapsListComponent } from './maps-list/maps-list.component';

export const destinationsRouteList: Routes = [
  { path: '', component: MapsListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapsModule,
    RouterModule.forChild(destinationsRouteList)
  ]
})
export class MapsRoutingModule { }
