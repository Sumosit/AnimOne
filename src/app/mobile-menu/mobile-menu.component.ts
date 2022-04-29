import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  scrollToTrial(value: any) {

    this.appService.menu_show = false
    let el = document.getElementById(value);
    setTimeout(() => {
      console.log(el)
      // @ts-ignore
      el.scrollIntoView()
    }, 1000)
  }
}
