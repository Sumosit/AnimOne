import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AppService} from "./app.service";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {environment as env} from "../environments/environment";
import {IMqttServiceOptions, MqttConnectionState, MqttService} from "ngx-mqtt";
import {Subscription} from "rxjs";
import {IRIS} from "../../iris";
import {MustMatch} from "./MustMatch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'animOne';
  public screenWidth: any;
  public height: any;

  formPromo: FormGroup;
  public segments = 0;

  public loading: boolean = false;
  public showPassword: boolean = false;
  public showPasswordConfirm: boolean = false;

  public mqttSubscription: Subscription | undefined;
  public feedbackSubscription: Subscription | undefined;

  constructor(public appService: AppService,
              private mqttService: MqttService,
              private formBuilder: FormBuilder) {
    this.screenWidth = window.innerWidth;
    this.height = this.appService.getElementHeight('right_panel-dark-img')

    this.formPromo = formBuilder.group({
      "userFio": ["", [Validators.required]],
      "userLogin": ["", [Validators.required]],
      "userEmail": ["", [Validators.required, Validators.email]],
      "userPhone": ["", Validators.required],
      "userPassword": ["", [Validators.required,
        Validators.minLength(6), Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9]+$')]],
      "userPasswordConfirm": ["", Validators.required]},{
      validators: this.checkPasswords
    });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('userPassword').value;
    // @ts-ignore
    let confirmPass = group.get('userPasswordConfirm').value
    return pass === confirmPass ? null : { notSame: true }
  }

  ngOnInit() {
  }

  get userFio() {
    return this.formPromo.controls['userFio'];
  }

  get userLogin() {
    return this.formPromo.controls['userLogin'];
  }

  get userEmail() {
    return this.formPromo.controls['userEmail'];
  }

  get userPhone() {
    return this.formPromo.controls['userPhone'];
  }

  get userPassword() {
    return this.formPromo.controls['userPassword'];
  }

  get userPasswordConfirm() {
    return this.formPromo.controls['userPasswordConfirm'];
  }

  getSegments() {
    let segments = 0;
    if (this.checkPasswordUppercase()) {
      segments++;
    }
    if (this.checkEnglish()) {
      segments++;
    }
    if (this.checkNumbers()) {
      segments++;
    }
    return segments;
  }

  checkPasswordUppercase() {
    let regex = '[\\A-Z]';
    return this.userPassword.value.search(regex) != -1;
  }

  checkEnglish() { // тут походу костыль
    let regex2 = '^[a-zA-Z0-9]+$';
    let pass = this.userPassword.value;
    let j = 0;
    for (let i = 0; i < pass.length; i++) {
      if (0 < Number.parseInt(pass[i]) && Number.parseInt(pass[i]) < 9) {
        j++;
      }
    }
    if (j === pass.length) {
      return false;
    }

    if (pass.match(regex2)) {
      return true
    }
    return false;
  }

  checkNumbers() {
    let regex = '[0-9]+';
    return this.userPassword.value.search(regex) != -1;
  }

  promoFormSubmit() {
    // if (this.formPromo.valid) {
    console.log('promo is valid');
    const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
      hostname: env.mqtt.server,
      port: env.mqtt.port,
      protocol: (env.mqtt.protocol === 'wss') ? 'wss' : 'ws',
      path: env.mqtt.directory,
      username: 'needtest',
      password: 'mequy46y'
    }
    this.mqttService.disconnect();
    this.mqttService.connect(MQTT_SERVICE_OPTIONS);
    this.mqttSubscription = this.mqttService.state.subscribe((state: MqttConnectionState) => {
      // console.log(state)

      if (state === 0) {
        // this.mqttSubscription?.unsubscribe();
      }
      if (state === 1) {

      }
      if (state === 2) {
        // console.log("start send");
        this.loading = false;

        this.appService.sendUserFeedbackRequest(this.userEmail.value, this.userPhone.value, this.userFio.value);

        this.feedbackSubscription = this.appService.getUserFeedbackRequest()
          .subscribe((feedbackReply: IRIS.UserFeedbackReply) => {
            if (feedbackReply.ok) {
              this.loading = false;
              // console.log('ok');
            } else if (!feedbackReply.ok) {
              this.loading = false;
              // console.log('not ok');
            }
          })
      }
    })
    // }
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
