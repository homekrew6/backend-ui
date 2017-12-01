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
  executionMethodList=[];
  currencyList=[];
  zoneList=[];
  selectedMapZone:any;
  firstCord:any;
  serviceId:any;
  is_reoccur_able = false;
  serviceZone=[];
  constructor(private fb: FormBuilder ,private router: Router, private activatedRoute:ActivatedRoute, private serviceService: ServiceService) { 
    
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
      'id':'',
      'banner_image':'',
      'file':[]
      
    });
    //this.rForm.controls['verticalId'].setValue('');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.serviceId = params['id'];        
      this.getIndividualService(this.serviceId);
  });
   this.getAllVertical();
    //this.getAllZone();
  this.getAllExecutionMethod();
  this.getAllCurrencies();
  }

  public editService(service){   
    console.log(service);
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
        banner_image:service.banner_image
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
      //delete addServiceObj.banner_image;
      this.saveServiecOnly(service,addServiceObj);
    }
 
     
   }

   public saveServiecOnly(service,addServiceObj){
    this.serviceService.editService(addServiceObj,this.serviceId).subscribe(res=>{
      //console.log(res);      
      if(res.id){
       this.serviceService.deleteServiceRelatedZone(this.serviceId).subscribe(res2=>{
          for (let i =0; i < this.zoneList.length; i++) {
          if(this.zoneList[i].selected){
            let addServiceZoneObj = {
              zoneId: this.zoneList[i].id,
              serviceId:res.id,
              cost_per_hour: this.zoneList[i].cost_per_hour,
              time_interval: this.zoneList[i].time_interval,
              min_charge: this.zoneList[i].min_charge,
              is_reoccur_able: this.zoneList[i].is_reoccur_able
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
       },err=>{
         this.error = "Error Occured, please try again"
       })       
       
        
        
      }
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualService(Id){
    
    this.serviceService.getIndividualService(Id).subscribe(res=>{
      //console.log(res);
      if(res.serviceZones.length > 0){
        for (let i =0; i < res.serviceZones.length; i++) {
          this.serviceZone.push(res.serviceZones[i].zoneId)
        }
        //console.log(this.serviceZone);
      }
      this.serviceService.getAllZone().subscribe(resZone=>{ 
         
        
        // resZone.map((res,key)=>{
        //   if(this.serviceZone.indexOf(res.id) >= 0){
        //     res.selected = true;
        //     res.cost_per_hour = 1+'';
        //     res.time_interval = 2+'';
        //     res.min_charge = 10+'';
        //     res.is_reoccur_able = false;
        //   }else{
        //     res.selected = false;
        //     res.cost_per_hour = 1+'';
        //     res.time_interval = 1+'';
        //     res.min_charge = 1+'';
        //     res.is_reoccur_able = false;
        //   }
        // });
        for (let j =0; j < resZone.length; j++) {
          if(this.serviceZone.indexOf(resZone[j].id) >= 0){
            let pos = this.serviceZone.indexOf(resZone[j].id);
            //console.log(res.serviceZones[pos]);
            console.log(j,'a')
            resZone[j].selected=true;
           
            resZone[j].cost_per_hour = res.serviceZones[pos].cost_per_hour;
            resZone[j].time_interval = res.serviceZones[pos].time_interval;
            resZone[j].min_charge = res.serviceZones[pos].min_charge;
            resZone[j].is_reoccur_able = res.serviceZones[pos].is_reoccur_able;
          }else{
            console.log(j,'b')
            resZone[j].selected=false;
            resZone[j].cost_per_hour = '';
            resZone[j].time_interval = '';
            resZone[j].min_charge = '';
            resZone[j].is_reoccur_able = false;
          }
        }
        
        this.zoneList=resZone;
        console.log(this.zoneList)
        this.rForm.controls['zones'].setValue(this.zoneList);
        //this.rForm.controls['zoneCostPerHour'].setValue(1);
        //this.rForm.controls['zoneTimeInterval'].setValue(1);
        //this.rForm.controls['zoneMinCharge'].setValue(1);
      })
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['verticalId'].setValue(res.verticalId);
      this.rForm.controls['color_code'].setValue(res.color_code);
      this.rForm.controls['cost_per_hour'].setValue(res.cost_per_hour);
      this.rForm.controls['currencyId'].setValue(res.currencyId);
      this.rForm.controls['execution_method'].setValue(res.execution_method);
      this.rForm.controls['icon_class'].setValue(res.icon_class);
      this.rForm.controls['is_reoccur_able'].setValue(res.is_reoccur_able);
      this.rForm.controls['min_charge'].setValue(res.min_charge);
      this.rForm.controls['min_no_dedicated_workers'].setValue(res.min_no_dedicated_workers);
      this.rForm.controls['min_no_workers'].setValue(res.min_no_workers);
      this.rForm.controls['time_interval'].setValue(res.time_interval); 
      this.rForm.controls['banner_image'].setValue(res.banner_image);    
      this.is_reoccur_able = res.is_reoccur_able;
      
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


  public showMap(selectedZone,primaryModal){
    console.log(selectedZone);
    this.selectedMapZone = selectedZone.fencing;
    this.firstCord = selectedZone.fencing[0].lat +', '+selectedZone.fencing[0].lng;
    primaryModal.show();    
  }
}
