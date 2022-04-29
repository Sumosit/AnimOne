import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animOne';

  constructor(public appService: AppService) {
  }


}
