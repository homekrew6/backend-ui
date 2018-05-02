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
  declarations: [ DashboardComponent ],
  providers: [WorkerService, CustomerService, JobService, PaymentService]
})
export class DashboardModule { }
