import { Component, OnInit } from '@angular/core';
import { MAPS } from 'src/app/shared/mock-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  maps = MAPS;
  
  constructor() { }

  ngOnInit() {
    console.log(this.maps);
  }

}
