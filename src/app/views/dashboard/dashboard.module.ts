import { CustomerService } from './../../services/customer.service';
import { WorkerService } from './../../services/worker.service';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { PaymentService } from '../../services/payment.service';
import { CommonModule } from '@angular/common';  
import { AdminProfileComponent } from '../profile/profile.component';
import { RoleService } from './../../services/role.service';
import { ServiceService } from '../../services/service.service';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
    CommonModule
  ],
  declarations: [ DashboardComponent ,AdminProfileComponent],
  providers: [WorkerService, CustomerService, JobService, PaymentService, ServiceService, RoleService]
})
export class DashboardModule { }
