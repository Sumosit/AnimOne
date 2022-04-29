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
    setInterval(() => {
      this.height = this.getElementHeight('right_panel-dark-img')
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  public getElementHeight(value: string) {
    let el = document.getElementById(value)
    if (el) {
      console.log(el.offsetHeight)
      return el.offsetHeight + 'px';
    }
    return '100%';
  }
}
