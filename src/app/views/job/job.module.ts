import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRoutingModule } from './job-routing';
import { JobComponent } from './job.component';
 import {JobDetailsComponent} from './job-details.component';
import { JobService } from '../../services/job.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
ModalModule.forRoot()
@NgModule({
  imports: [
    CommonModule,
    JobRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [JobComponent, JobDetailsComponent],
  providers:[
    JobService
  ]
})
export class JobModule { }
