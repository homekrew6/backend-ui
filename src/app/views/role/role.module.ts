import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './role-routing';
import { RoleComponent } from './role.component';
import { RoleService } from '../../services/role.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // ,
    // FroalaEditorModule.forRoot(),
    // FroalaViewModule.forRoot()

  ],
  declarations: [RoleComponent, AddComponent, EditComponent],
  providers:[
    RoleService
  ]
})
export class RoleModule { }
