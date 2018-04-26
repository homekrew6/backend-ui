import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyRoutingModule } from './currency-routing';
import { CurrencyComponent } from './currency.component';
import { CurrencyService } from '../../services/currency.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CurrencyComponent, AddComponent, EditComponent],
  providers:[
    CurrencyService
  ]
})
export class CurrencyModule { }
