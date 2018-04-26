import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerRoutingModule } from './answer-routing';
import { AnswerComponent } from './answer.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AnswerService } from '../../services/answer.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    AnswerRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AnswerComponent, AddComponent, EditComponent],
  providers:[
    AnswerService
  ]
})
export class AnswerModule { }
