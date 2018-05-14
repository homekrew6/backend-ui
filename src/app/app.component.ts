import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ToasterService, ToastNotificationConfiguration, ToastType } from 'ngx-toaster/src';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<ngx-toast-notification></ngx-toast-notification><router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  items: Observable<any[]>;
  messaging = firebase.messaging()
  currentMessage = new BehaviorSubject(null)
  constructor(private authService: AuthService, private toasterService: ToasterService) {
    // setTimeout(()=>{
    //   debugger;
    //   let toastNotificationConfiguration: ToastNotificationConfiguration = {
    //     message: 'Sample Toast message',
    //     displayDuration: 5000,
    //     autoHide: true,
    //     showCloseButton: true,
    //     toastType: ToastType.INFORMATION
    //   };
    //   this.toasterService.showToastMessage(toastNotificationConfiguration);
    // },1000)
  };

  ngOnInit()
  {
    this.getPermission();
    this.receiveMessage();
  }
  getPermission() {
    this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken()
      })
      .then(token => {
        if (localStorage.getItem("role"))
        {
          let role1 = localStorage.getItem("role").toLowerCase();
          if (localStorage.getItem("userId")) {
            const data = { pushToken: token };
            this.authService.updatePushToken(localStorage.getItem("userId"), data).subscribe((res) => {
            })
          }
          else {
            localStorage.setItem("pushToken", token);
          }
        }
        else
        {
          localStorage.setItem("pushToken", token);
        }
       
        //this.updateToken(token)
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }


  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      this.currentMessage.next(payload)
      const toastNotificationConfiguration: ToastNotificationConfiguration = {
        message: payload["notification"].title,
        displayDuration: 10000,
        autoHide: true,
        showCloseButton: true,
        toastType: ToastType.INFORMATION
      };
      this.toasterService.showToastMessage(toastNotificationConfiguration);
    });

  }

}
