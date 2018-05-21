import { AuthService } from './../../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneRoutingModule } from './zone-routing';
import { ZoneComponent } from './zone.component';
import { ZoneService } from '../../services/zone.service';
import { ServiceService } from '../../services/service.service';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { NguiMapModule} from '@ngui/map';
import { EditComponent } from './edit/edit.component';
import { NumberDirectiveModule } from './../../filters/numberDirective.module.';
@NgModule({
  imports: [
    CommonModule,
    ZoneRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?libraries=visualization,places,drawing&key=AIzaSyAzwzNzq3irmwjUVU1MhMuwP7qD0CfZijA'}),
    NumberDirectiveModule
  ],
  declarations: [ZoneComponent, AddComponent, EditComponent],
  providers:[
    ZoneService, ServiceService, AuthService
  ]
})
export class ZoneModule { }
