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
  constructor(private router: Router, private serviceService: ServiceService) { }

  ngOnInit() {
    this.getAllServices();
  }

  public getAllServices(){
    this.serviceService.getService().subscribe(res=>{
      //console.log(res);
      this.serviceList=res;
    })
  }
  public deleteService(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.serviceService.deleteService(id).subscribe(res=>{
        this.getAllServices();
      },err=>{

      })
    }
  }
}