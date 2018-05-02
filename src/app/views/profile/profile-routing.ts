import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ListComponent } from "./list/list.component";
import { AdminProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Profile'
    },
    children: [
      {
        path: '',
        component: AdminProfileComponent,
        data: {
          title: 'Profile'
        }
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProfileRoutingModule {}
