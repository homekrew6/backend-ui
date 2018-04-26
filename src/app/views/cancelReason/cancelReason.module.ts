import { CancelReasonService } from './../../services/cancelReason.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelReasonRoutingModule } from './cancelReason-routing';
import { CancelReasonComponent } from './cancelReason.component';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { absEnvironment } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    CancelReasonRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CancelReasonComponent, AddComponent, EditComponent],
  providers:[
    CancelReasonService
  ]
})
export class CancelReasonModule { }
