import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {
  logName = '';
  constructor(private el: ElementRef, private router: Router, private authSrvc: AuthService) {
  }

  //wait for the component to render completely
  ngOnInit(): void {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
    this.logName = localStorage.getItem("loginName");
    //console.log(this.logName);
  }

  logout() {
    let role1 = localStorage.getItem('role').toLowerCase();
    if (role1 == "admin") {
      const userId = localStorage.getItem("userId");
      this.authSrvc.updatePushToken(localStorage.getItem("userId"), { pushToken: "" }).subscribe((res) => {

      });
    }
    localStorage.clear();
    this.router.navigate(['pages/login']);
  }
}
