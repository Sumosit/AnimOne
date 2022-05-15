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

  public height: any;

  constructor(public appService: AppService) {
    this.screenWidth = window.innerWidth;
    this.height = this.getElementHeight('right_panel-dark-img')
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.height = this.getElementHeight('right_panel-dark-img')
  }

  public getElementHeight(value: string) {
    let el = document.getElementById(value)
    if (el) {
      // return el.offsetHeight + 'px';
    }
    return '99.5%';
  }

  public scroll(id: string) {
    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: "start"});
    }
  }
}
