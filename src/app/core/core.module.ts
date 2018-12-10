import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    ],
  exports: [
    HeaderComponent,
    SidenavListComponent
  ]
})
export class CoreModule { }
