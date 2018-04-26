import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerComponent } from './worker.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Worker'
    },
    children: [
      {
        path: '',
        component: WorkerComponent,
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
export class WorkerRoutingModule {}
