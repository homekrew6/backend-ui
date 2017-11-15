import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerRoutingModule } from './worker-routing';
import { WorkerComponent } from './worker.component';
import { WorkerService } from '../../services/worker.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    WorkerRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WorkerComponent, AddComponent, EditComponent],
  providers:[
    WorkerService
  ]
})
export class WorkerModule { }
