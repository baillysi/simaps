import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { MapsMainComponent } from './maps-main/maps-main.component';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsMainComponent,
    MapsDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
