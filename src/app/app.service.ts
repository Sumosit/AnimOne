import {Injectable} from '@angular/core';
import {IRIS} from "../../iris";
import Language = IRIS.Language;
import {MqttService} from "ngx-mqtt";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  menu_show: boolean = false

  constructor(private mqttService: MqttService) { }

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
