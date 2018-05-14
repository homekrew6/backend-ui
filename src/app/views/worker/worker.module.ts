import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerRoutingModule } from './worker-routing';
import { WorkerComponent } from './worker.component';
import { WorkerService } from '../../services/worker.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AccordionModule } from 'ngx-bootstrap';
// import { NumberOnlyDirective } from './../../filters/numberOnly.directive';
import { NumberDirectiveModule } from './../../filters/numberDirective.module.';

@NgModule({
  imports: [
    CommonModule,
    WorkerRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    AccordionModule.forRoot(),
    NumberDirectiveModule
  ],
  declarations: [WorkerComponent, AddComponent, EditComponent, DetailsComponent],
  providers:[
    WorkerService
  ]
})
export class WorkerModule { }
