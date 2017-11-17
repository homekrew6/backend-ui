import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ServiceComponent } from './service.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Service'
    },
    children: [
      {
        path: '',
        component: ServiceComponent,
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
export class ServiceRoutingModule {}
