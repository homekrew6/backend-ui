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
          { name: 'Role', routerLink: '/role', class: 'fa fa-users' },
          { name: 'Customer', routerLink: '/customers', class: 'fa fa-user-o' },
          { name: 'Worker', routerLink: '/worker', class: 'icon-people' },
          { name: 'CMS', routerLink: '/cms', class: 'icon-book-open' },
          { name: 'FAQ', routerLink: '/faq', class: 'icon-eye' },
          { name: 'Vertical', routerLink: '/vertical', class: 'icon-options-vertical' },
          { name: 'Zone', routerLink: '/zone', class: 'icon-globe' },
          { name: 'Service', routerLink: '/service', class: 'fa fa-shopping-bag' },
          { name: 'Question', routerLink: '/question', class: 'fa fa-question' },
          { name: 'Language', routerLink: '/language', class: 'fa fa-language' },
          { name: 'Currency', routerLink: '/currency', class: 'fa fa-money' },
          { name: 'Setting', routerLink: '/setting', class: 'fa fa-cog' },
          { name: 'Intro Slider', routerLink: '/slider', class: 'fa fa-book' },
          { name: 'Job', routerLink: '/job', class: 'icon-briefcase' },
          { name: 'Cancel Reasons', routerLink: '/cancelReason', class: 'fa fa-ban' },
          { name: 'Materials', routerLink: '/materials', class: 'fa fa-cogs' },
          { name: 'Promo Code', routerLink: '/promotions', class: 'icon-tag' },
          { name: 'Payment', routerLink: '/payment', class: 'icon-wallet' },
          { name: 'Agent', routerLink: '/agent', class: 'icon-people' })
      }
      else if (localStorage.getItem("role") == "Country Admin" || localStorage.getItem("role") == "City Admin") {

        this.sidebarMenuList.push({ name: 'Dashboard', routerLink: '/dashboard', class: 'icon-speedometer' }, { name: 'Zone', routerLink: '/zone', class: 'icon-globe' },
          { name: 'Job', routerLink: '/job', class: 'icon-briefcase' })

      }
      
      else if (localStorage.getItem("role") == "Support") {

        this.sidebarMenuList.push({ name: 'Dashboard', routerLink: '/dashboard', class: 'icon-speedometer' }, { name: 'Chat', routerLink: '/chat', class: 'fa fa-comments' })

      }
    }


  }
}
