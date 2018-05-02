import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { WorkerService } from '../../../services/worker.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  error: string;
  is_active = true;
  workerId: any;
  skillsList=[];
  jobList=[];
  settings = {
    columns: {
      service: {
        title: 'Service',
        valuePrepareFunction: (cell, row) => { return  row.service.name }
      },
      customer: {
        title: 'Customer',
        valuePrepareFunction: (cell, row) => { return row.customer?row.customer.name:'' }
      },
      price: {
        title: 'Price'
      },
      zone: {
        title: 'Zone',
        valuePrepareFunction: (cell, row) => { return row.zone ? row.zone.name : '' }
      },
      postedDate:{
        title: 'Job Date',
        valuePrepareFunction: (cell, row) => { const raw = new Date(row.postedDate); const formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss'); return formatted; }
      },
      status: {
        title: 'Status'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'delete',
          title: '<i class="fa fa-trash" ></i>',
        }

      ],
    },
    attr: {
      class: 'table table-bordered'
    },


  };
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute:ActivatedRoute, private workerService: WorkerService) { 

    
  }
  goToList()
  {
    this.router.navigate(['worker']);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.workerId = params['id'];
      this.workerService.getJobListingById(this.workerId).subscribe((jobs)=>{
        this.jobList=jobs;
      })
      this.workerService.getWorkerSkillsById(this.workerId).subscribe((skills)=>{
        this.skillsList=skills;
        console.log(this.skillsList);
      }, (err1)=>{
        console.log(err1);
      })
      // this.getIndividualWorker(this.workerId);
    });
  }

  public addWorker(worker){
    worker.is_active = this.is_active;
    this.workerService.addWorker(worker).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/worker']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
