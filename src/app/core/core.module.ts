import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    ],
  exports: [
    HeaderComponent,
    SidenavListComponent,
    HomeComponent
  ]
})
export class CoreModule { }
