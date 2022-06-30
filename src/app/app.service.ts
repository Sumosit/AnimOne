import {Injectable} from '@angular/core';
import {IRIS} from "../../iris";
import Language = IRIS.Language;
import {MqttService} from "ngx-mqtt";
import {map, Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  menu_show: boolean = false

  constructor(private mqttService: MqttService,
              public translateService: TranslateService) {
    translateService.addLangs(['en', 'ru', 'kz']);
    translateService.setDefaultLang('ru');
    if (localStorage.getItem('lang')) {
      // @ts-ignore
      this.switchLang(localStorage.getItem('lang'));
    } else {
      this.switchLang('ru');
    }
  }

  switchLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
  }

  getLang() {
    return this.translateService.currentLang;
  }

  sendUserFeedbackRequest(userEmail: string,
                          userPhone: string,
                          userFio: string) {
    let serial = 1;

    const UserFeedbackRequest = IRIS.UserFeedbackRequest.create({
      email: userEmail,
      tel: userPhone,
      fio: userFio,
      lang: Language.RU,
      message: 'Заявка на пробный период IRIS'
    })

    const apiReq = IRIS.InfoApiRequest.create({
      serialNum: serial,
      userFeedbackRequest: UserFeedbackRequest
    })

    const buffer = IRIS.InfoApiRequest.encode(apiReq).finish();
    this.mqttService.publish('jms/queue/iris/Main', Buffer.from(buffer)).subscribe(() => {});
  }

  getUserFeedbackRequest(): Observable<IRIS.UserFeedbackReply> {
    return this.mqttService.observe('jms/topic/iris/Main/client').pipe(
      map(buffer => IRIS.UserFeedbackReply.decode(buffer.payload))
    );
  }

  sendUserRegRequest(email: string,
                     username: string,
                     lastname: string,
                     firstname: string,
                     middlename: string,
                     tel: string,
                     password: string,
                     captcha: string,
                     guid: string) {
    let serial = 1;
    const USERINFO = IRIS.UserRegRequest.create({
      user: {
        email: email,
        lastname: lastname,
        firstname: firstname,
        middlename: middlename,
        userName: username,
        tel: tel,
        password: password,
      },
      reCaptcha: captcha,
      guid: guid,
      lang: Language.RU
    });
    console.log(USERINFO);
    const REQUEST = IRIS.OpenInfoApiRequest.create({
      serialNum: serial,
      userRegRequest: USERINFO,
    })
    //
    const buffer = IRIS.OpenInfoApiRequest.encode(REQUEST).finish();
    this.mqttService.publish('jms/queue/open/iris/Info', Buffer.from(buffer)).subscribe(() => {
    });
  }

  getInfoRegRequest(): Observable<IRIS.OpenInfoApiReply> {
    return this.mqttService.observe('jms/topic/open/iris/Info/client').pipe(
      map(buffer => IRIS.OpenInfoApiReply.decode(buffer.payload)),
    );
  }


  scrollTo(id: any) {
    const animItems = document.querySelectorAll(".change-theme-anim");
    for (let i = 0; i < animItems.length; i++) {
      animItems[i].classList.add('showChangeTheme')
    }
    setTimeout(() => {
      this.menu_show = false
      let el = document.getElementById(id);
      setTimeout(() => {
        // console.log(el)
        // @ts-ignore
        el.scrollIntoView({block: "center"})
      }, 0)
    }, 300)
    // @ts-ignore
    // document.getElementById('change_theme-text').style.display = 'flex';

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
