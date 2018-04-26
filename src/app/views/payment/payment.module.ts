import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing';
import { PaymentComponent } from './payment.component';
import { PaymentService } from '../../services/payment.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TinymceModule } from 'angular2-tinymce';
import { absEnvironment } from '../../../environments/environment';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TinymceModule.withConfig({
      skin_url: absEnvironment.absuluteUrl
    }),
    Ng2SmartTableModule
    // ,
    // FroalaEditorModule.forRoot(),
    // FroalaViewModule.forRoot()
  ],
  declarations: [PaymentComponent],
  providers:[
    PaymentService
  ]
})
export class PaymentModule { }
