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
  executionMethodList=[];
  currencyList=[];
  zoneList=[];
  selectedMapZone:any;
  firstCord:any;
  is_reoccur_able = false;
  is_active = true;
  
  
  
  constructor(private fb: FormBuilder ,private router: Router, private serviceService: ServiceService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'verticalId': [null, Validators.required],
      'icon_class':'',
      'color_code':'',
      'currencyId':[null, Validators.required],
      'cost_per_hour':[null, Validators.required],
      'time_interval':[null, Validators.required],
      'min_charge':[null, Validators.required],
      'is_reoccur_able':'',
      'execution_method':[null, Validators.required],
      'min_no_workers':'',
      'min_no_dedicated_workers':[],
      'zoneCostPerHour':'',
      'zoneTimeInterval':'',
      'zoneMinCharge':'',
      'zoneIsReOccurable':'',
      'zones':[],
      'file':[],
      'is_active': '',
      'search':[]
    });
    this.rForm.controls['verticalId'].setValue('');    
  }

  ngOnInit() {
    this.getAllVertical();
    this.getAllZone();
    this.getAllExecutionMethod();
    this.getAllCurrencies();
    this.rForm.controls['currencyId'].setValue(''); 
    this.rForm.controls['execution_method'].setValue(0);
    this.rForm.controls['is_reoccur_able'].setValue(false);
  }
  
  public addService(service){   
    delete service.zoneCostPerHour;
    delete service.zoneTimeInterval;
    delete service.zoneMinCharge;
    //console.log(service);
    //console.log(service.file.name)
    let addServiceObj = {
      name: service.name,
      verticalId:service.verticalId,
      color_code:service.color_code,
      cost_per_hour:service.cost_per_hour,
      currencyId:service.currencyId,
      execution_method:service.execution_method,
      icon_class:service.icon_class,
      is_reoccur_able:this.is_reoccur_able,
      min_charge:service.min_charge,
      min_no_dedicated_workers:service.min_no_dedicated_workers,
      min_no_workers:service.min_no_workers,
      time_interval:service.time_interval,
      banner_image:'',
      is_active : this.is_active 
    }
    if(service.file){
      let imgDetails = {
      name: service.file.name,
      type: service.file.type
    }
    //console.log(addServiceObj);

    this.serviceService.addServiceWithFile(imgDetails).subscribe(res=>{
          console.log(res);
          if(res){
            var xhr = new XMLHttpRequest()
            xhr.open("PUT", res.service.signed_request)
            xhr.setRequestHeader('x-amz-acl', 'public-read')
            xhr.onload = function() {
              if (xhr.status === 200) {
                //done()
              }
            }
      
            xhr.send(service.file)
            addServiceObj.banner_image = res.service.url;
            this.saveServiecOnly(service,addServiceObj);
          }else{
            this.error = "Error Occured, please try again"
          }
          
    
     
    },err=>{
      this.error = "Error Occured, please try again"
    })
    }else{
      delete addServiceObj.banner_image;
      this.saveServiecOnly(service,addServiceObj);
    }
    
    
  }

  public saveServiecOnly(service,addServiceObj){
    this.serviceService.addService(addServiceObj).subscribe(resService=>{
      if(resService.id){

     for (let i =0; i < service.zones.length; i++) {
       if(service.zones[i].selected){
         let addServiceZoneObj = {
           zoneId: service.zones[i].id,
           serviceId:resService.id,
           cost_per_hour: service.zones[i].cost_per_hour,
           time_interval: service.zones[i].time_interval,
           min_charge: service.zones[i].min_charge,
           is_reoccur_able: service.zones[i].is_reoccur_able
         } 
         this.serviceService.addServiceZone(addServiceZoneObj).subscribe(res1=>{
           
           
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
  public getAllExecutionMethod(){
    this.serviceService.getAllExexutionMethod().subscribe(res=>{
      //console.log(res);
      this.executionMethodList=res;
    })
  }
  public getAllCurrencies(){
    this.serviceService.getAllCurrencies().subscribe(res=>{      
      this.currencyList=res;
    })
  }

  public fileChangeListener($event) {
    //console.log($event);
    
    const image: any = new Image();
    const file: File = $event.target.files[0];
    this.rForm.controls['file'].setValue(file);
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      //console.log(image);
      
    };
    myReader.readAsDataURL(file);
    //console.log(myReader);
  }

  public getAllZone(){
    this.serviceService.getAllZone().subscribe(res=>{
      //console.log(res);
      for (let i =0; i < res.length; i++) {
        res[i].selected=false;
        res[i].cost_per_hour='';
        res[i].time_interval='';
        res[i].min_charge='';
        res[i].is_reoccur_able=false;
        
               
      }
      console.log(res)
      this.zoneList=res;
      this.rForm.controls['zones'].setValue(this.zoneList);
    })
  }

  public changeReoccurable($e: any){
      this.is_reoccur_able = !this.is_reoccur_able;
      
  }
  
  public showMap(selectedZone,primaryModal){
    console.log(selectedZone);
    this.selectedMapZone = selectedZone.fencing;
    this.firstCord = selectedZone.fencing[0].lat +', '+selectedZone.fencing[0].lng;
    primaryModal.show();    
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
