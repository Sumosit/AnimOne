import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MobileMenuComponent} from './mobile-menu/mobile-menu.component';
import {ReactiveFormsModule} from "@angular/forms";
import {IMqttServiceOptions, MqttModule} from "ngx-mqtt";

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {}

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
