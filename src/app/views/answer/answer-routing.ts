import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AnswerComponent } from './answer.component';
//import { AddComponent } from './add/add.component';
//import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Answer'
    },
    children: [
      {
        path: 'list/:questionId',
        //path: 'list',
        component: AnswerComponent,
        data: {
          title: 'List'
        }
      }/*,
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
      }*/
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AnswerRoutingModule {}
