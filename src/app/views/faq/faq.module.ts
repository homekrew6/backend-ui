import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing';
import { FaqComponent } from './faq.component';
import { FaqService } from '../../services/faq.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [FaqComponent, AddComponent, EditComponent],
  providers:[
    FaqService
  ]
})
export class FaqModule { }
