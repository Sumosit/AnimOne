import {Component, HostListener} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animOne';
  public screenWidth: any;

  constructor(public appService: AppService) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

}
