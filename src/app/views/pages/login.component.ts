import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  data = {
    email: 'admin@example.com',
    password: 'password'
  }
  error: string;
  items: Observable<any[]>;
  constructor(private router: Router, private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.items = db.collection('items').valueChanges().map(res => {
      console.log(res);
      return res;
    });
  }

  handleLogin(): void {
    this.error = null;
    // if (this.data.email === 'admin@example.com' && this.data.password === 'password') {
    //   localStorage.setItem('token', 'asdfasdfasdfsad9879a7sudfs9ad87f9asdfjlkjajsdflk');
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.error = 'Invalid credentials';
    // }
    this.afAuth.auth.signInWithEmailAndPassword(this.data.email, this.data.password).then(res => {
      console.log(res);
    }).catch(err => {
      this.error = err.message;
      console.error(err);
    });
  }
}
