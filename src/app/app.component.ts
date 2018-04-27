import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  items: Observable<any[]>;
  constructor() {};

}
