import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Payment'
    },
    children: [
      {
        path: '',
        component: PaymentComponent,
        data: {
          title: 'List'
        }
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PaymentRoutingModule {}
