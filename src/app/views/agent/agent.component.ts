
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agentList=[];
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'Phone'
      },
      status: {
        title: 'Status'
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
            name: 'status',
            title: 'Change Status',
          }
        ],
    },
    attr: {
      class: 'table table-bordered'
    },


  };
  
  constructor(private router: Router, private srvc: AuthService) { }

  ngOnInit() {
    this.getAllAgents();
  }
  onCustom(event) {
    if(event.action=="delete")
    {
      this.deletAgent(event.data.id);
    }
    else if(event.action=="edit")
    {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.router.navigateByUrl('/agent/edit/'+event.data.id)
    }

    else if (event.action == "status") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.changeStatus(event.data)
    }

    
  }

  public getAllAgents(){
    
    this.srvc.getAgent().subscribe(res=>{ 
      if(localStorage.getItem("userId"))
      {
        const userId=localStorage.getItem("userId");
        let finalList=[];
        const filteredItems = res.response.sort(function (a, b) {
          return b.id - a.id;
        });
        filteredItems.map((item) => {
          if(item.id!=userId)
          {
            if (item.is_active == 1) {
              item.status = "Active";
            }
            else {
              item.status = "InActive"
            }
            finalList.push(item);
          }
          
        })
        this.agentList = finalList;
      }
      
    })
  }
  public deletAgent(id){    
    const confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){ 
      const data={id:id};     
      this.srvc.deleteAgent(id).subscribe(res=>{
        this.getAllAgents();
      },err=>{

      })
    }
  }

  public changeStatus(worker){ 
   
    let worker_status
    if(worker.is_active){
      worker_status = {
        is_active:0
      }
    }else{
      worker_status = {
        is_active:1
      }
    }    
    const confirmMessage = confirm('Do you want to change status?')
    if(confirmMessage ){      
      this.srvc.editAgent(worker_status,worker.id).subscribe(res=>{
        this.getAllAgents();
      },err=>{
      })
    }
  }
  
}
