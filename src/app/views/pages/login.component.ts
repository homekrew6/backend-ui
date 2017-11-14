import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { User } from "./user.model";

@Component({
  templateUrl: 'login.component.html'
})


export class LoginComponent {
  data = {
    email: 'krishnendu@natitsolved.com',
    password: '123456'
  }
  error: string;
  items: Observable<any[]>;
  constructor(private router: Router, private auth: AuthService) {
  }







  handleLogin(): void {
    this.error = null;
    this.auth.login(this.data.email, this.data.password).subscribe(res => {
      console.log(res);
      // localStorage.setItem('authToken', res[].toString());
       
      this.router.navigate(['/dashboard']);
    }, err => {
      //console.log(err);
      this.error = "Invalid email or password"
    });
  }
}


