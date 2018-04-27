import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ListComponent } from "./list/list.component";
import { JobComponent } from './job.component';
import { JobDetailsComponent } from './job-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Job'
    },
    children: [
      {
        path: '',
        component: JobComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'details',
        component: JobDetailsComponent,
        data: {
          title: 'Details'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class JobRoutingModule { }
