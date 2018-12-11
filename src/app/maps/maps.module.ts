import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MapsDashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MapsDashboardComponent
  ]
})
export class MapsModule { }
