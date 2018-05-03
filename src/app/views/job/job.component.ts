import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JobService } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobList = [];
  is_disabled = false;
  availableWorkerList = [];
  selectedJobId: any;
  isAssigning = false;
  errorMessage:any;
  @ViewChild('largeModal') public largeModal: ModalDirective;
  role='';
  settings = {
    columns: {
      service: {
        title: 'Service',
        valuePrepareFunction: (cell, row) => { return row.service?row.service.name:'' }
      },
      customer: {
        title: 'Customer',
        valuePrepareFunction: (cell, row) => { return row.customer?row.customer.name:'' }
      },
      customerEmail: {
        title: 'Customer Email',
        type:'html',
        valuePrepareFunction: (cell, row) => { return row.customer ? '<a href="mailto:' + row.customer.email+'">' + row.customer.email+'</a>':'' }
      },
      worker: {
        title: 'Worker',
        valuePrepareFunction: (cell, row) => { return row.worker?row.worker.name:'N/A' }
      },
      workerEmail: {
        title: 'Worker Email',
        type: 'html',
        valuePrepareFunction: (cell, row) => { return row.worker ? '<a href="mailto:' + row.worker.email + '">' + row.worker.email + '</a>' : '' }
      },
      status1: {
        title: 'Status'
      },
      price:{
        title:'Price'
      },
      postedDate:{
        title:'Posted Date',
        valuePrepareFunction: (cell, row) => { const raw = new Date(row.postedDate); const formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss'); return formatted; }
      }
      
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'info',
          title: '<i class="fa fa-info"></i>',
        },
        {
          name: 'delete',
          title: '<i class="fa fa-trash" ></i>',
        },
        {
          name: 'assign',
          title: '<i class="fa fa-tasks" ></i>',
        }
      ],
    },
    attr: {
      class: 'table table-bordered'
    },
  };
  constructor(private router: Router, private jobService: JobService, private authSrvc:AuthService) { 

    if(localStorage.getItem("role"))
    {
      this.role=localStorage.getItem("role");
    }
  }

  ngOnInit() {
    // $('#test').hide();
    this.getAllJobs();
  }
  onCustom(event) {
    if (event.action == "delete") {
      this.deleteJob(event.data.id);
    }
    else if (event.action == "info") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      if(event.data.price)
      {
        event.data.price=parseFloat(event.data.price).toFixed(2);
      }
     this.goToDetails(event.data)
    }
    else if (event.action == "assign") {
      if(event.data.status1!='S')
      {
        window.scrollTo(0,0);
        this.errorMessage='This job is alreay assigned.';
      }
      else
      {
        this.openModal('', event.data)
      }
   
    }
  }
  public getAllJobs() {
    this.jobService.getJobList().subscribe(res => {
      //console.log(res);
      if (this.role.toLowerCase()=="admin")
      {
        this.jobList = res.response.message;
        this.formatJobData();
      }
      else
      {
        this.authSrvc.getIndividualAgent(localStorage.getItem('userId')).subscribe((agentDetails)=>{
          if (agentDetails.response.type == "Success") 
          {
            debugger;
            let myZoneList=[];
            agentDetails.response.message.zones.map((item)=>{
              myZoneList.push(item);
            });
            res.response.message.map((item)=>{
              if(myZoneList.includes(item.zoneId))
              {
                this.jobList.push(item);
              }
            });
            this.formatJobData();

          }
        })
      }
     
    
      // setTimeout(function () {

      //   $('a[href*="mailto:"]').each(function () {

      //     // get the replaced text/number
      //     let number = $(this).text();

      //     // replace all spaces with nothing (in case the tel: property doesn't like spaces)
      //     number = number.replace(/\s+/g, '').toLowerCase();

      //     // update the href attribute to the replaced number
      //     $(this).attr('href', 'mailto:' + number);
      //   });

      // }, 100)
    })
  }

  private formatJobData() {
    this.jobList.map((item) => {
      if (item.status == "STARTED") {
        item.status1 = "P";
      }
      else if (item.status == "ACCEPTED") {
        item.status1 = "A";
      }
      else if (item.status == "COMPLETED") {
        item.status1 = "JC";
      }
      else if (item.status == "ONMYWAY") {
        item.status1 = "O";
      }
      else if (item.status == "FOLLOWEDUP") {
        item.status1 = "F";
      }
      else if (item.status == "CANCELLED") {
        item.status1 = "CL";
      }
      else if (item.status == "CLOSED") {
        item.status1 = "C";
      }
      else if (item.status == "JOBSTARTED") {
        item.status1 = "S";
      }
    });
  }

  public deleteJob(id) {
    const confirmMessage = confirm('Do you want to delete?')
    if (confirmMessage) {
      this.jobService.deleteJob(id).subscribe(res => {
        this.getAllJobs();
      }, err => {
        alert("Please try again later");
      });
    }
  }

  goToDetails(job) {
    localStorage.setItem("jobDetails", JSON.stringify(job));
    this.router.navigate(['/job/details']);
  }
  public openModal(largeModal, job) {
    this.selectedJobId = job.id;
    this.isAssigning=false;
    this.is_disabled = true;
    const postedDateTime = new Date(job.postedDate);
    if (postedDateTime) {
      const day = postedDateTime.getDay();
      let dayOfWeek;
      switch (day) {
        case 0:
          dayOfWeek = 'sun';
          break;
        case 1:
          dayOfWeek = 'mon';
          break;
        case 2:
          dayOfWeek = 'tue';
          break;
        case 3:
          dayOfWeek = 'wed';
          break;
        case 4:
          dayOfWeek = 'thu';
          break;
        case 5:
          dayOfWeek = 'fri';
          break;
        case 6:
          dayOfWeek = 'sat';
          break;
        default:
          dayOfWeek = 'sun';
          break;
      }
      const time = new Date(job.postedDate).toLocaleString().split(',')[1].split(" ")[1].slice(0, 2);
      const time1 = Number(time);
      let finalTime;
      if (time1 > 12) {
        finalTime = 24 - time1;
        finalTime = finalTime.toString() + " pm"

      }
      else {
        finalTime = time1.toString() + " am";
      }
      if (finalTime && dayOfWeek) {
        const data = { "serviceId": job.serviceId, "saveDbDay": dayOfWeek, "saveDBTime": finalTime };
        this.jobService.getAvailableWorkerList(data).subscribe((res) => {
          this.is_disabled = false;
          this.availableWorkerList = res.response.message;
          if(largeModal)
          {
            largeModal.show();
          }
          else if(this.largeModal)
          {
            this.largeModal.show();
          }
          
          setTimeout(function () {

            $('a[href*="mailto:"]').each(function () {

              // get the replaced text/number
              let number = $(this).text();

              // replace all spaces with nothing (in case the tel: property doesn't like spaces)
              number = number.replace(/\s+/g, '').toLowerCase();

              // update the href attribute to the replaced number
              $(this).attr('href', 'mailto:' + number);
            });

          }, 100)
        }, (error) => {
          console.log(error);
          this.is_disabled = false;
          alert('Please try again later.');
        })
      }
    }
    else {
      alert('Posted Date is not valid.');
    }

  }


  assignJob(largeModal, worker) {
    this.isAssigning = true;
    if (this.selectedJobId) {
      const data = { "id": this.selectedJobId, "status": "ACCEPTED", "workerId": worker.id };
      this.jobService.assignJob(data).subscribe((res) => {
        this.jobList.map((item) => {
          if (item.id == this.selectedJobId) {
            item.status = "ACCEPTED";
            item.status1 = "A";
            item.worker = { "name": worker.name, "email": worker.email };
            setTimeout(function () {

              $('a[href*="mailto:"]').each(function () {

                // get the replaced text/number
                let number = $(this).text();

                // replace all spaces with nothing (in case the tel: property doesn't like spaces)
                number = number.replace(/\s+/g, '').toLowerCase();

                // update the href attribute to the replaced number
                $(this).attr('href', 'mailto:' + number);
              });

            }, 100)
          }
        });
        this.isAssigning = false;
        alert(res.response.message);
        largeModal.hide();

      }, (err) => {
        console.log(err);
        this.isAssigning = false;
        alert('Please try again later.');
      })
    }
    else {
      this.isAssigning = false;
      alert('Please select a job to assign.');
    }
   

  }


}
