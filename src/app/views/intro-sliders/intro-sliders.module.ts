import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroSlidersRoutingModule } from './intro-sliders-routing';
import { IntroSlidersComponent } from './intro-sliders.component';
import { SliderService } from '../../services/slider.service';
import { ServiceService } from '../../services/service.service';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    IntroSlidersRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IntroSlidersComponent, AddComponent, EditComponent],
  providers:[
    SliderService,
    ServiceService
  ]
})
export class IntroSlidersModule { }
