import { AuthService } from './../../services/auth.service';
import { AdminProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing';
import { RoleService } from './../../services/role.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ServiceService } from '../../services/service.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminProfileComponent],
  providers:[
    AuthService,
    RoleService,
    ServiceService
  ]
})
export class ProfileModule { }
