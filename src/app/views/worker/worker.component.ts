import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  workerList=[];
  errorMessage="";
  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'Phone'
      },
      status: {
        title: 'Status'
      },
      isDedicated: {
        title: 'Type'
      }
    },
    actions: {
      add: false,
      edit:false,
      delete:false,
        custom: [
          {
            name: 'edit',
            title: '<i class="fa fa-pencil" style="margin-left:12px !important;"></i>',
          },
          {
            name: 'delete',
            title: '<i class="fa fa-trash" ></i>',
          },
          {
            name: 'details',
            title: '<i class="fa fa-info-circle" ></i>',
          },
           {
            name: 'status',
            title: 'Change Status',
          },
          {
            name: 'type',
            title: 'Change Type',
          }
        
        ],
    },
    attr: {
      class: 'table table-bordered'
    },


  };
  // data = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },

  //   {
  //     id: 11,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   }
  // ];
  constructor(private router: Router, private workerService: WorkerService) { }

  ngOnInit() {
    this.getAllWorkers();
  }
  onCustom(event) {
    if(event.action=="delete")
    {
      this.deleteWorker(event.data.id);
    }
    else if(event.action=="edit")
    {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.router.navigateByUrl('/worker/edit/'+event.data.id)
    }
    else if (event.action =="details")
    {
      this.router.navigateByUrl('/worker/details/' + event.data.id)
    }

    else if (event.action == "status") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.changeStatus(event.data)
    }

    else if (event.action == "type") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.changeType(event.data)
    }
  }

  public getAllWorkers(){
    this.workerService.getWorker().subscribe(res=>{ 
      res.map((item)=>{
        if (item.is_active==1)
        {
          item.status="Active";
        }
        else
        {
          item.status="InActive"
        }
        if (item.isDedicated==1)
        {
          item.isDedicated="Dedicated";
        }
        else
        {
          item.isDedicated = "Standard";
        }
      });
      
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.workerList = filteredItems;
    })
  }
  public deleteWorker(id){    
    const confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.workerService.deleteWorker(id).subscribe(res=>{
        this.getAllWorkers();
      },err=>{

      })
    }
  }

  public changeStatus(worker){
    this.errorMessage="";    
    let IsValid=true;
    let worker_status
    if(worker.is_active){
      worker_status = {
        is_active:0
      }
    }else{
      if (worker.commission)
      {
        worker_status = {
          is_active: 1
        }
      }
      else
      {
        IsValid=false;
      }
     
    }
    if(IsValid)
    {
      const confirmMessage = confirm('Do you want to change status?')
      if (confirmMessage) {
        this.workerService.editWorker(worker_status, worker.id).subscribe(res => {
          this.getAllWorkers();
        }, err => {
        })
      }
    }
    else
    {
      this.errorMessage="Please set the comission for the worker to make it active.";
    }    
   
  }
  public changeType(worker) {
    let worker_type
    if (worker.isDedicated =="Dedicated") {
      worker_type = {
        isDedicated: 0
      }
    } else {
      worker_type = {
        isDedicated: 1
      }
    }
    const confirmMessage = confirm('Do you want to change type?')
    if (confirmMessage) {
      this.workerService.editWorker(worker_type, worker.id).subscribe(res => {
        this.getAllWorkers();
      }, err => {
      })
    }
  }

}
