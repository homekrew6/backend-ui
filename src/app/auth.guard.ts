import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
<<<<<<< HEAD
=======

>>>>>>> 522761d9eb6cc12ebf04ce089470c9568a3804f0
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/pages/login']);
      return false;
    }
<<<<<<< HEAD
    return true;
=======

    else {
      if (localStorage.getItem("role").toLowerCase() == "admin") {
        return true;
      }
      else {
        if (localStorage.getItem("role") == "Country Admin" || (localStorage.getItem("role") == "City Admin")) {
          if (url.includes('dashboard') || url.includes('zone') || url.includes('job')) {
            return true;
          }
          
        }
        else if (localStorage.getItem("role") == "Support") {
          if (url.includes('dashboard') || url.includes('chat')) {
            return true;
          }
        }
      }
    }

>>>>>>> 522761d9eb6cc12ebf04ce089470c9568a3804f0
  }

}
