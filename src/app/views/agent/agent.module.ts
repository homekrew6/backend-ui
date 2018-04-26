import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentRoutingModule } from './agent-routing';
import { AgentComponent } from './agent.component';
import { AuthService } from '../../services/auth.service';
import { RoleService } from '../../services/role.service';
import { ZoneService } from '../../services/zone.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    AgentRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [AgentComponent, AddComponent, EditComponent],
  providers:[
    AuthService,
    RoleService,
    ZoneService
  ]
})
export class AgentModule { }
