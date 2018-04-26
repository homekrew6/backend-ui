import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing';
import { SettingsComponent } from './settings.component';
import { SettingService } from '../../services/setting.service';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SettingsComponent],
  providers: [
    SettingService
  ]
})
export class SettingsModule { }
