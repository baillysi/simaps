import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dashboard = true;

  @Output() sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.dashboard = !this.dashboard;
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
