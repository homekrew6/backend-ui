import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing';
import { SettingsComponent } from './settings.component';
import { SettingService } from '../../services/setting.service';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirectiveModule } from './../../filters/numberDirective.module.';
@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NumberDirectiveModule
  ],
  declarations: [SettingsComponent],
  providers: [
    SettingService
  ]
})
export class SettingsModule { }
