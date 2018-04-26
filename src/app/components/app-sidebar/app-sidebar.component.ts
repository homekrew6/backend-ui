import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {

  sidebarMenuList = [];
  constructor(private el: ElementRef) { }

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
    if (localStorage.getItem("role")) {
      if (localStorage.getItem("role").toLowerCase() == "admin") {
        this.sidebarMenuList.push({ name: 'Dashboard', routerLink: '/dashboard', class: 'icon-speedometer' },
          { name: 'Role', routerLink: '/role', class: 'icon-speedometer' },
          { name: 'Customer', routerLink: '/customers', class: 'icon-people' },
          { name: 'Worker', routerLink: '/worker', class: 'icon-people' },
          { name: 'CMS', routerLink: '/cms', class: 'icon-book-open' },
          { name: 'FAQ', routerLink: '/faq', class: 'icon-eye' },
          { name: 'Vertical', routerLink: '/vertical', class: 'icon-check' },
          { name: 'Zone', routerLink: '/zone', class: 'icon-globe' },
          { name: 'Service', routerLink: '/service', class: 'icon-check' },
          { name: 'Question', routerLink: '/question', class: 'icon-check' },
          { name: 'Language', routerLink: '/language', class: 'icon-check' },
          { name: 'Currency', routerLink: '/currency', class: 'icon-check' },
          { name: 'Setting', routerLink: '/setting', class: 'icon-check' },
          { name: 'Intro Slider', routerLink: '/slider', class: 'icon-check' },
          { name: 'Job', routerLink: '/job', class: 'icon-check' },
          { name: 'Cancel Reasons', routerLink: '/cancelReason', class: 'icon-check' },
          { name: 'Materials', routerLink: '/materials', class: 'icon-check' },
          { name: 'Promo Code', routerLink: '/promotions', class: 'icon-check' },
          { name: 'Payment', routerLink: '/payment', class: 'icon-check' },
          { name: 'Agent', routerLink: '/agent', class: 'icon-people' })
      }
      else if (localStorage.getItem("role") == "Country Admin" || localStorage.getItem("role") == "City Admin") {

        this.sidebarMenuList.push({ name: 'Dashboard', routerLink: '/dashboard', class: 'icon-speedometer' }, { name: 'Zone', routerLink: '/zone', class: 'icon-globe' },
          { name: 'Job', routerLink: '/job', class: 'icon-check' })

      }
      
      else if (localStorage.getItem("role") == "Support") {

        this.sidebarMenuList.push({ name: 'Dashboard', routerLink: '/dashboard', class: 'icon-speedometer' }, { name: 'Chat', routerLink: '/chat', class: 'icon-message' })

      }
    }


  }
}
