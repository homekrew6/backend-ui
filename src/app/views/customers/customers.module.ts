import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from "./coustomer-routing";
import { CustomersComponent } from './customers.component';
import { CustomerService } from '../../services/customer.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from "./list/list.component";
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CustomersComponent,ListComponent, AddComponent, EditComponent],
  providers:[
    CustomerService
  ]
})
export class CustomersModule { 
  constructor(){
    
  }
 }
