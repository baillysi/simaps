import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MapsListComponent } from './maps-list/maps-list.component';

@NgModule({
  declarations: [MapsListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [  
  ]
})

export class MapsModule { }
