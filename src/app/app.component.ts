import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AppService} from "./app.service";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {environment as env} from "../environments/environment";
import {IMqttServiceOptions, MqttConnectionState, MqttService} from "ngx-mqtt";
import {Subscription} from "rxjs";
import {IRIS} from "../../iris";
import {v4 as uuidv4} from 'uuid'
import {group} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'animOne';
  public screenWidth: any;
  public height: any;

  public formPromo: FormGroup;
  public segments: number = 0;
  public guid: string = ''
  public errorRegText: any = [];

  public loading: boolean = false;
  public showPassword: boolean = false;
  public showPasswordConfirm: boolean = false;

  public mqttSubscription: Subscription | undefined;
  public regSubscription: Subscription | undefined;

  constructor(public appService: AppService,
              private mqttService: MqttService,
              private formBuilder: FormBuilder) {
    this.screenWidth = window.innerWidth;
    this.height = this.appService.getElementHeight('right_panel-dark-img')

    this.formPromo = formBuilder.group({
      "userFio": ["", [Validators.required, this.checkFio]],
      "userLogin": ["", [Validators.required]],
      "userEmail": ["", [Validators.required, Validators.email]],
      "userPhone": ["", Validators.required],
      "userPassword": ["", [Validators.required,
        // Validators.minLength(6), Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9]+$')]],
      "userPasswordConfirm": ["", [Validators.required]],
      "userCaptcha": ["", [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],

    }, {validators: this.checkPasswords});
  }

  public checkPasswords: ValidatorFn = (control: any): ValidationErrors | null => {
    if (control.controls['userPassword'].value === control.controls['userPasswordConfirm'].value) {
      return null;
    }
    return {'mismatch': true};
  }

  checkFio: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let fio = group?.value;
    if (!fio) {
      return null;
    }
    let f_i_o = fio.trim().replace(/\s+/g, ' ').split(' ');
    if (f_i_o[0] && f_i_o[1] && f_i_o[2] && !f_i_o[3]) {
      return null;
    } else {
      return {notSame: true};
    }
  }

  ngOnInit() {
    this.guid = this.generateUuid();
  }

  getU() {
    console.log(this.formPromo.controls['userPassword']);
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

  get userCaptcha() {
    return this.formPromo.controls['userCaptcha'];
  }

  generateUuid() {
    return uuidv4();
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

    return !!pass.match(regex2);

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
      username: 'iris@open.kase.kz',
      password: 'free',
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

        let fio = this.userFio.value.trim().replace(/\s+/g, ' ').split(' ');
        this.appService.sendUserRegRequest(
          this.userEmail.value,
          this.userLogin.value,
          fio[0],
          fio[1],
          fio[2],
          this.userPhone.value,
          this.userPassword.value,
          this.userCaptcha.value,
          this.guid
        );

        this.regSubscription = this.appService.getInfoRegRequest()
          .subscribe((regReply: IRIS.OpenInfoApiReply) => {
            if (regReply.userRegReply?.ok) {
              console.log('ok');
              this.loading = false;
            } else if (!regReply.userRegReply?.ok) {
              console.log('not ok');
              this.loading = false;
              this.guid = this.generateUuid();
              if (regReply.userRegReply?.messages) {
                regReply.userRegReply?.messages.forEach(item => {
                  this.errorRegText.push(item.id + ': ' + item.message);
                })
              }
            }
          })
      }
    })
  }

  public getCaptchaLink() {
    return env.mqtt.server.toString() === '192.168.211.181'
      ? 'http://192.168.211.181:8080/iris-api-ee/rest/captcha/' : 'https://irisapi.kase.kz/iris-api-ee/rest/captcha/'
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
