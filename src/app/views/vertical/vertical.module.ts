import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalRoutingModule } from './vertical-routing';
import { VerticalComponent } from './vertical.component';
import { VerticalService } from '../../services/vertical.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    VerticalRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VerticalComponent, AddComponent, EditComponent],
  providers:[
    VerticalService
  ]
})
export class VerticalModule { }
