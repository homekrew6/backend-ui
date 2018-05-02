import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing';
import { ChatComponent } from './chat.component';


import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { AngularFireModule } from 'angularfire2';
// import * as firebase from 'firebase';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// export const firebaseConfig = {
//   apiKey: "AIzaSyCnS3M8ZZBYRH4QubDH3OJPKSgk-03Nm9w",
//   authDomain: "krew-user-app.firebaseapp.com",
//   databaseURL: "https://krew-user-app.firebaseio.com",
//   projectId: "krew-user-app",
//   storageBucket: "krew-user-app.appspot.com",
//   messagingSenderId: "16831185707"
// };
// firebase.initializeApp(firebaseConfig);
@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // ,
    // FroalaEditorModule.forRoot(),
    // FroalaViewModule.forRoot()
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  declarations: [ChatComponent],
  providers:[
    ServiceService
  ]
})
export class ChatModule { }
