import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MobileMenuComponent} from './mobile-menu/mobile-menu.component';
import {ReactiveFormsModule} from "@angular/forms";
import {IMqttServiceOptions, MqttModule} from "ngx-mqtt";
import {AppRoutingModule} from "./app-routing.module";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {}

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
