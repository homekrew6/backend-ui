import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JobService } from '../../services/job.service';
declare var jqyery: any;
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
  constructor(private router: Router, private jobService: JobService) { }

  ngOnInit() {
    // $('#test').hide();
    this.getAllJobs();
  }

  public getAllJobs() {
    this.jobService.getJobList().subscribe(res => {
      //console.log(res);
      this.jobList = res.response.message;
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
      })
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
    })
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
          console.log("pragati", this.availableWorkerList);
          largeModal.show();
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
