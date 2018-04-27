import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatList = [];
  allSupportChatList: any;
  messageRef = firebase.database().ref().child('supportChat');
  specificChatList = [];
  chatRoomId: any;
  IsShowChatSection = false;
  userId: any;
  message: any;
  errorMessage: any;
  selectedCustomer: any;
  // @ViewChild('chatScroll') private chatScroll: ElementRef;
  constructor(private router: Router) {
    if (localStorage.getItem("userId")) {
      this.userId = localStorage.getItem("userId");
    }



  }
  openChat(chat) {
    this.specificChatList = [];
    if (this.userId && chat && chat.customerId) {
      this.selectedCustomer = { customerName: chat.customerName, customerId: chat.customerId };
      this.chatRoomId = this.userId + "_" + chat.customerId;
      for (const key in this.allSupportChatList) {
        if (this.allSupportChatList[key] && this.allSupportChatList[key].chatRoomId == this.chatRoomId) {
          this.specificChatList.push(this.allSupportChatList[key]);
        }
      }
      this.IsShowChatSection = true;
    }

  }
  ngOnInit() {
    let allChatList;
    const self = this;
    let customerIds = [];
    this.messageRef.on('value', (snapshot) => {
      allChatList = snapshot.val();
      self.allSupportChatList = snapshot.val();

      self.specificChatList = [];
      for (let key in allChatList)
      // tslint:disable-next-line:one-line
      {

        if (allChatList[key]) {
          if (allChatList[key].adminId == self.userId) {
            if (self.chatRoomId) {

              if (allChatList[key].chatRoomId == self.chatRoomId) {
                const data = {
                  Message: allChatList[key].Message, IsAdminSender: allChatList[key].IsAdminSender, chatRoomId:
                    self.chatRoomId, customerName: allChatList[key].customerName, customerId: allChatList[key].customerId, date: allChatList[key].date, adminId: self.userId,
                  MessageImage: allChatList[key].MessageImage
                };
                self.specificChatList.push(data);
              }
            }
            if (customerIds.length > 0) {
              let IsFound = false;
              let index;
              for (let i = 0; i < customerIds.length; i++) {
                if (customerIds[i].customerIds == allChatList[key].customerId) {
                  IsFound = true;
                  index = i;
                  break;
                }

              }
              if (IsFound) {
              }
              else {
                customerIds.push({ customerIds: allChatList[key].customerId, date: allChatList[key].date });
                self.chatList.push(allChatList[key]);
              }
            }
            else {
              customerIds.push({ customerIds: allChatList[key].customerId, date: allChatList[key].date });
              self.chatList.push(allChatList[key]);
            }
          }






        }
      }
    })
    // this.messageRef.on('value', fb).then((snapshot) => {
    //   allChatList = snapshot.val();
    //   self.allSupportChatList = snapshot.val();
    //   debugger;
    //   for (const key in allChatList)
    //   // tslint:disable-next-line:one-line
    //   {

    //     if (allChatList[key]) {
    //       if (allChatList[key].adminId == this.userId) {
    //         if (customerIds.length > 0) {
    //           let IsFound = false;
    //           let index;
    //           for (let i = 0; i < customerIds.length; i++) {
    //             if (customerIds[i].customerIds == allChatList[key].customerId) {
    //               IsFound = true;
    //               index = i;
    //               break;
    //             }

    //           }
    //           if (IsFound) {
    //             //  debugger;
    //             //  if (new Date(allChatList[key].date) > new Date(customerIds[index].date) )
    //             //  {
    //             //        alert("greater");
    //             //  }
    //             //  else
    //             //  {
    //             //    alert("greatern");
    //             //  }
    //           }
    //           else {
    //             customerIds.push({ customerIds: allChatList[key].customerId, date: allChatList[key].date });
    //             self.chatList.push(allChatList[key]);
    //           }
    //         }
    //         else {
    //           customerIds.push({ customerIds: allChatList[key].customerId, date: allChatList[key].date });
    //           self.chatList.push(allChatList[key]);
    //         }
    //       }





    //     }
    //   }
    // }).catch((err) => {
    //   console.log(err);
    // })



    //  setTimeout(() => {
    //    debugger;
    //    const data={Message:'Another message to support',IsAdminSender:false,chatRoomId:'1_28',customerName:'Pragati', customerId:'28', date:new Date().toUTCString()};
    //    this.messageRef.push(data);
    //  }, 3000);
  }


  sendMessage() {
    if (this.message) {
      const data = {
        Message: this.message, IsAdminSender: true, chatRoomId:
          this.chatRoomId, customerName: this.selectedCustomer.customerName, customerId: this.selectedCustomer.customerId, date: new Date().toUTCString(), adminId: this.userId,
        MessageImage: ''
      };
      this.messageRef.push(data);
      this.message = "";
      //this.specificChatList.push(data);


    }
    else {
      this.errorMessage = "Please type a message to send.";
      window.scrollTo(0, 0);
    }

  }

}
