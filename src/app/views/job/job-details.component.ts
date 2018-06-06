import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JobService } from '../../services/job.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.html',
  styleUrls: ['./job.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobDetails:any;
  cancelReason:any;
  constructor(private router: Router, private jobService: JobService, private route:ActivatedRoute) {
   }

  ngOnInit() {
    if(localStorage.getItem("jobDetails"))
    {
      this.jobDetails=JSON.parse(localStorage.getItem("jobDetails"));
      if (this.jobDetails.status)
      {
        this.jobService.getJobCancelReason(this.jobDetails.id).subscribe((res)=>{
          if(res.length && res.length>0)
          {
            this.cancelReason = res[0].reason;
          }
        })
      }
    
      
    }
    else
    {
        this.router.navigate(['/job']);
    }
  }


  goToList()
  {
    this.router.navigate(['/job']);
  }

  

  

}
