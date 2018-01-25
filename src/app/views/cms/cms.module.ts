import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing';
import { CmsComponent } from './cms.component';
import { CmsService } from '../../services/cms.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TinymceModule } from 'angular2-tinymce';
import { absEnvironment } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TinymceModule.withConfig({
      skin_url: absEnvironment.absuluteUrl
    }),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [CmsComponent, AddComponent, EditComponent],
  providers:[
    CmsService
  ]
})
export class CmsModule { }
