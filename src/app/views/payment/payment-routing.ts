import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ListComponent } from "./list/list.component";
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

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
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        data: {
          title: 'Edit'
        }
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PaymentRoutingModule {}
