import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AppService} from "./app.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment as env} from "../environments/environment";
import {IMqttServiceOptions, MqttConnectionState, MqttService} from "ngx-mqtt";
import {Subscription} from "rxjs";
import {IRIS} from "../../iris";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'animOne';
  public screenWidth: any;
  public height: any;

  formPromo: FormGroup;

  public loading: boolean = false;

  public mqttSubscription: Subscription | undefined;
  public feedbackSubscription: Subscription | undefined;

  constructor(public appService: AppService,
              private mqttService: MqttService,
              private formBuilder: FormBuilder) {
    this.screenWidth = window.innerWidth;
    this.height = this.appService.getElementHeight('right_panel-dark-img')

    this.formPromo = formBuilder.group({
      "userFio": ["", [Validators.required]],
      "userEmail": ["", [Validators.required, Validators.email]],
      "userPhone": ["", Validators.required]
    });

  }

  ngOnInit() {
    // Тест подключения
  //   const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  //     hostname: env.mqtt.server,
  //     port: env.mqtt.port,
  //     protocol: (env.mqtt.protocol === 'wss') ? 'wss' : 'ws',
  //     path: env.mqtt.directory,
  //     username: 'iris@open.kase.kz',
  //     password: 'free'
  //   }
  //   this.mqttService.disconnect();
  //   this.mqttService.connect(MQTT_SERVICE_OPTIONS);
  //   this.mqttSubscription = this.mqttService.state.subscribe((state: MqttConnectionState) => {
  //     console.log(state)
  //     if (state === 0) {
  //       // this.mqttSubscription?.unsubscribe();
  //     }
  //     if (state === 1) {
  //
  //     }
  //     if (state === 2) {
  //       this.loading = false;
  //     }
  //   })
  }

  get userFio() {
    return this.formPromo.controls['userFio'];
  }

  get userEmail() {
    return this.formPromo.controls['userEmail'];
  }

  get userPhone() {
    return this.formPromo.controls['userPhone'];
  }

  promoFormSubmit() {
    if (this.formPromo.valid) {
      console.log(321)
      const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
        hostname: env.mqtt.server,
        port: env.mqtt.port,
        protocol: (env.mqtt.protocol === 'wss') ? 'wss' : 'ws',
        path: env.mqtt.directory,
        username: 'iris@open.kase.kz',
        password: 'free'
      }
      this.mqttService.disconnect();
      this.mqttService.connect(MQTT_SERVICE_OPTIONS);
      this.mqttSubscription = this.mqttService.state.subscribe((state: MqttConnectionState) => {

        if (state === 0) {
          // this.mqttSubscription?.unsubscribe();
        }
        if (state === 1) {

        }
        if (state === 2) {
          console.log(state)
          this.loading = false;

          // this.appService.sendUserFeedbackRequest(this.userEmail.value, this.userPhone.value, this.userFio.value);
          //
          // this.feedbackSubscription = this.appService.getUserFeedbackRequest()
          //   .subscribe((feedbackReply: IRIS.UserFeedbackReply) => {
          //     if (feedbackReply.ok) {
          //        this.loading = false;
          //       console.log('ok');
          //     }
          //     else if (!feedbackReply.ok) {
          //       this.loading = false;
          //       console.log('not ok');
          //     }
          //   })
        }
      })
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.height = this.appService.getElementHeight('right_panel-dark-img')
  }

  ngOnDestroy(): void {
    this.mqttSubscription?.unsubscribe();
  }
}
