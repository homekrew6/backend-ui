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
  constructor(private router: Router, private jobService: JobService, private route:ActivatedRoute) {
   }

  ngOnInit() {
    if(localStorage.getItem("jobDetails"))
    {
      this.jobDetails=JSON.parse(localStorage.getItem("jobDetails"));
    
      
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
