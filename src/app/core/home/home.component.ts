import { Component, OnInit } from '@angular/core';
import { Maps } from 'src/app/shared/maps';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  maps : Maps;
  
  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  getMaps(): void {
    this.restService.getMaps()
        .subscribe(output => {this.maps = output, console.log(this.maps)});
  }

}
