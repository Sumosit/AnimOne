import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  menu_show: boolean = false

  constructor() { }

  scrollTo(value: any) {

    this.menu_show = false
    let el = document.getElementById(value);
    setTimeout(() => {
      console.log(el)
      // @ts-ignore
      el.scrollIntoView({block: "center"})
    }, 0)
  }
  scrollToBehavior(value: any) {

    this.menu_show = false
    let el = document.getElementById(value);
    setTimeout(() => {
      console.log(el)
      // @ts-ignore
      el.scrollIntoView({behavior: "smooth"})
    }, 0)
  }
}
