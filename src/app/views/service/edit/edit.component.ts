import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ServiceService } from '../../../services/service.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { DrawingManager } from '@ngui/map';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild(DrawingManager) drawingManager: DrawingManager;
  rForm: FormGroup;
  error: string;
  verticalList=[];
  zoneList=[];
  selectedMapZone:any;
  firstCord:any;
  serviceId:any;
  serviceZone=[];
  constructor(private fb: FormBuilder ,private router: Router, private activatedRoute:ActivatedRoute, private serviceService: ServiceService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'verticalId': [null, Validators.required],
      'zones':[],
      'id':''
      
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.serviceId = params['id'];        
      this.getIndividualService(this.serviceId);
  });
  this.getAllVertical();
  }

  public editService(service){   
    console.log(service);
     let addServiceObj = {
       name: service.name,
       verticalId:service.verticalId
     }
 
     this.serviceService.editService(addServiceObj,service.id).subscribe(res=>{
       console.log(res);      
       if(res.id){
        this.serviceService.deleteServiceRelatedZone(service.id).subscribe(res2=>{
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
        },err=>{
          this.error = "Error Occured, please try again"
        })       
        
         
         
       }
       //this.router.navigate(['/service']);
     },err=>{
       this.error = "Error Occured, please try again"
     })
   }

  public getIndividualService(Id){
    this.serviceService.getIndividualService(Id).subscribe(res=>{
      console.log(res);
      if(res.serviceZones.length > 0){
        for (let i =0; i < res.serviceZones.length; i++) {
          this.serviceZone.push(res.serviceZones[i].zoneId)
        }
        console.log(this.serviceZone);
      }
      this.serviceService.getAllZone().subscribe(resZone=>{        
        for (let j =0; j < resZone.length; j++) {
          if(this.serviceZone.indexOf(resZone[j].id) >= 0){
            resZone[j].selected=true
          }else{
            resZone[j].selected=false
          }
        }
        
        this.zoneList=resZone;
        //console.log(this.zoneList)
        this.rForm.controls['zones'].setValue(this.zoneList);
      })
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['verticalId'].setValue(res.verticalId);
      this.rForm.controls['id'].setValue(res.id);            
      
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
  public showMap(selectedZone,primaryModal){
    console.log(selectedZone);
    this.selectedMapZone = selectedZone.fencing;
    this.firstCord = selectedZone.fencing[0].lat +', '+selectedZone.fencing[0].lng;
    primaryModal.show();    
  }
}
