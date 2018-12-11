import { Component, OnInit } from '@angular/core';
import { MAPS } from 'src/app/shared/mock-maps';

@Component({
  selector: 'app-maps-dashboard',
  templateUrl: './maps-dashboard.component.html',
  styleUrls: ['./maps-dashboard.component.scss']
})
export class MapsDashboardComponent implements OnInit {

  maps = MAPS;

  constructor() { }

  ngOnInit() {
    console.log(this.maps);
  }

}
