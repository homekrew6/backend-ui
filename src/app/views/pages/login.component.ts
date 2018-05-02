import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { User } from "./user.model";
import { debuglog } from 'util';
@Component({
  templateUrl: 'login.component.html'
})


export class LoginComponent {
  data = {
    email: '',
    password: ''
  }
  error: string;
  items: Observable<any[]>;
  constructor(private router: Router, private auth: AuthService) {
    if (!this.auth.isAuthenticated) {

    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }







  handleLogin(): void {
    this.error = null;

    this.auth.login(this.data.email, this.data.password).subscribe(res => {
      console.log(res);
      // localStorage.setItem('authToken', res[].toString());
      this.auth.getRoleTypes().subscribe((res1) => {
        res1.map((item) => {
          if (item.id == localStorage.getItem("role")) {
            localStorage.setItem("role", item.name)
            if (item.name != "admin") {
              if (localStorage.getItem("is_active") == "false") {
                localStorage.clear();
                this.error = "Your account is deactivated. Please contact admin.";
                return;
              }
            }
            if (localStorage.getItem("pushToken")) {
              this.auth.updatePushToken(localStorage.getItem("userId"), { pushToken: localStorage.getItem("pushToken") }).subscribe((res) => {
                localStorage.removeItem("pushToken");
              })
            }
          }
        })
        this.router.navigate(['/dashboard']);
      })

    }, err => {

      //console.log(err);
      this.error = "Invalid email or password"
    });
  }
}


