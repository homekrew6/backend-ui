import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageRoutingModule } from './language-routing';
import { LanguageComponent } from './language.component';
import { LanguageService } from '../../services/language.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    LanguageRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LanguageComponent, AddComponent, EditComponent],
  providers:[
    LanguageService
  ]
})
export class LanguageModule { }
