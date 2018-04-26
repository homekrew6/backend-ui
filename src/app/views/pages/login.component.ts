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
    if (!this.auth.isAuthenticated)
    {

    }
    else
    {
      this.router.navigate(['/dashboard']);
    }
  }







  handleLogin(): void {
    this.error = null;
    
    this.auth.login(this.data.email, this.data.password).subscribe(res => {
      console.log(res);
<<<<<<< HEAD
      // localStorage.setItem('authToken', res[].toString());
     
      this.router.navigate(['/dashboard']);
=======

      // localStorage.setItem('authToken', res[].toString());
     this.auth.getRoleTypes().subscribe((res1)=>{
       res1.map((item)=>{
         if(item.id==localStorage.getItem("role"))
         {
            localStorage.setItem("role", item.name)
         }
       })
        this.router.navigate(['/dashboard']);
     })
     
>>>>>>> 522761d9eb6cc12ebf04ce089470c9568a3804f0
    }, err => {
     
      //console.log(err);
      this.error = "Invalid email or password"
    });
  }
}


