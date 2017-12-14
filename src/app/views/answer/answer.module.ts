import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerRoutingModule } from './answer-routing';
import { AnswerComponent } from './answer.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AnswerService } from '../../services/answer.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    AnswerRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AnswerComponent],
  providers:[
    AnswerService
  ]
})
export class AnswerModule { }
