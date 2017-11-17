import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ServiceService } from '../../../services/service.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
//import { BsModalService } from 'ngx-bootstrap/modal';
//import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DrawingManager } from '@ngui/map';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild(DrawingManager) drawingManager: DrawingManager;
  rForm: FormGroup;
  error: string;
  verticalList=[];
  zoneList=[];
  selectedMapZone:any;
  firstCord:any;
  
  
  
  constructor(private fb: FormBuilder ,private router: Router, private serviceService: ServiceService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'verticalId': [null, Validators.required],
      'zones':[]   
      
    });
    this.rForm.controls['verticalId'].setValue('');
  }

  ngOnInit() {
    this.getAllVertical();
    this.getAllZone();
  }
  
  public addService(service){   
   // console.log(service);
    let addServiceObj = {
      name: service.name,
      verticalId:service.verticalId
    }

    this.serviceService.addService(addServiceObj).subscribe(res=>{
      //console.log(res);      
      if(res.id){
        
        for (let i =0; i < service.zones.length; i++) {
          if(service.zones[i].selected){
            let addServiceZoneObj = {
              zoneId: service.zones[i].id,
              serviceId:res.id
            } 
            this.serviceService.addServiceZone(addServiceZoneObj).subscribe(res1=>{
              //console.log(res1)
              
            },err=>{
    
            })
          }
          
          if(i >=service.zones.length-1){
            this.router.navigate(['/service']);
          }else{
            this.error = "Error Occured, please try again"
          }             
                 
        }
        
        
      }
      //this.router.navigate(['/service']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getAllVertical(){
    this.serviceService.getAllVertical().subscribe(res=>{
      //console.log(res);
      this.verticalList=res;
    })
  }

  public getAllZone(){
    this.serviceService.getAllZone().subscribe(res=>{
      //console.log(res);
      for (let i =0; i < res.length; i++) {
        res[i].selected=false
        
               
      }
      console.log(res)
      this.zoneList=res;
      this.rForm.controls['zones'].setValue(this.zoneList);
    })
  }
  
  public showMap(selectedZone,primaryModal){
    console.log(selectedZone);
    this.selectedMapZone = selectedZone.fencing;
    this.firstCord = selectedZone.fencing[0].lat +', '+selectedZone.fencing[0].lng;
    primaryModal.show();    
  }

}
