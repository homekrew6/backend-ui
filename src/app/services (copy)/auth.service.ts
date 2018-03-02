import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { User } from "../../app/views/pages/user.model";

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  public isAuthenticated(): boolean {
    try {
      const token = localStorage.getItem('authToken') || null;
      if (!token) {
        return false;
      }
      return true;
    } catch (err) {

    }
  }
  public login(email: string, password: string) {
    return this.http.post(environment.baseurl + 'Admins/login', { email, password }, { headers: environment.headers() }).map((res: Response) => {
      localStorage.setItem('authToken', res.json().id);
      return this.getUserInfo(res.json().userId, res.json().id).subscribe(res => {
        console.log(res);
        localStorage.setItem('loginName', res.name);
        localStorage.setItem('loginEmail', res.email);
        return res;
      });
    });
  }
  public login2(email: string, password: string){
    
    return this.http.post(environment.baseurl+'Admins/login',{email,password},{headers:environment.headers()}).map((res: Response) =>{
      localStorage.setItem('authToken', res.json().id);
      //return res.json();
      return this.http.get(environment.baseurl+'Admins/'+res.json().userId+'?access_token='+res.json().id).map((res2:Response)=>{
        console.log(res2);
        return res2.json();
      })
    })
  }

  private getUserInfo(id: number, token: string) {
    return this.http.get(environment.baseurl + 'Admins/' + id + '?access_token=' + token).map((res: Response) => {
      return res.json();
    });
  }

}
