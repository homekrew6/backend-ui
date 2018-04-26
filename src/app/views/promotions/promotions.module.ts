import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsRoutingModule } from './promotions-routing';
import { PromotionsComponent } from './promotions.component';
import { PromoService } from '../../services/promo.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DateTimePickerModule } from 'ngx-datetime-picker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
@NgModule({
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DateTimePickerModule,
    AngularMultiSelectModule
    // ,
    // FroalaEditorModule.forRoot(),
    // FroalaViewModule.forRoot()
  ],
  declarations: [PromotionsComponent, AddComponent, EditComponent],
  providers:[
    PromoService
  ]
})
export class PromotionsModule { }
