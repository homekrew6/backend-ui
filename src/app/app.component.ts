import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  items: Observable<any[]>;
  messaging = firebase.messaging()
  currentMessage = new BehaviorSubject(null)
  constructor(private authService:AuthService) {};

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
        if(localStorage.getItem("userId") && localStorage.getItem("role")=="admin")
        {
         const data={pushToken:token};
          this.authService.updatePushToken(localStorage.getItem("userId"), data).subscribe((res)=>{
          })
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
    });

  }

}
