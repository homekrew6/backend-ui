import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from "./question-routing";
import { QuestionComponent } from './question.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from '../../services/question.service';
import { ServiceService } from '../../services/service.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {AnswerService} from '../../services/answer.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

//import { IconPickerModule } from 'ngx-icon-picker/dist/index';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    ModalModule.forRoot()
    //IconPickerModule
  ],
  declarations: [QuestionComponent, AddComponent, EditComponent],
  providers:[
    QuestionService,
    ServiceService,
    AnswerService
  ]
})
export class QuestionModule { }
