import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {
  logName = '';
  constructor(private el: ElementRef, private router: Router) { }

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
    localStorage.clear();
    this.router.navigate(['pages/login']);
  }
}
