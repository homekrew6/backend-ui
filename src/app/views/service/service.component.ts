import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceList=[];
  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      verticalName: {
        title: 'Vertical'
      },
      min_charge: {
        title: 'Min Charge'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'edit',
          title: '<i class="fa fa-pencil"></i>',
        },
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
  constructor(private router: Router, private serviceService: ServiceService) { }

  ngOnInit() {
    this.getAllServices();
  }

  onCustom(event) {

    if (event.action == "delete") {
      this.deleteService(event.data.id);
    }

    else if (event.action == "edit") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.router.navigateByUrl('/service/edit/' + event.data.id)
    }

  }

  public getAllServices(){
    this.serviceService.getService().subscribe(res=>{
      res.map((item) => {
        item.verticalName = item.vertical.name;
      })
      this.serviceList=res;
    })
  }


  public deleteService(id){
    //console.log(id);
    const confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.serviceService.deleteService(id).subscribe(res=>{
        this.getAllServices();
      },err=>{

      })
    }
  }
}