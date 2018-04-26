import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsRoutingModule } from './material-routing';
import { MaterialsComponent } from './material.component';
import { MaterialService } from '../../services/material.service';
import { ServiceService } from '../../services/service.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MaterialsComponent, AddComponent, EditComponent],
  providers:[
    MaterialService,
    ServiceService
  ]
})
export class MaterialsModule { }
