import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatListModule, MatGridListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule 
  ],
  exports: [  
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SharedModule { }
