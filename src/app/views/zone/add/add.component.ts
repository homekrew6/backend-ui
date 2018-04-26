import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ZoneService } from '../../../services/zone.service';
import { ServiceService } from '../../../services/service.service';
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
  selectedOverlay : any;
  currentCord: any;
  languageList = [];
  currencyList = [];
  parentZoneList = [];
  is_sec_pass = false;
  is_active = true;
  is_job_accept = false;
  is_disable = false;
  constructor(private fb: FormBuilder,private router: Router, private zoneService: ZoneService, private serviceService: ServiceService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'fencing': [null, Validators.required],
      'description': '',
      'languageId': [null, Validators.required],
      'currencyId': [null, Validators.required],
      'premium': '', 
      'is_active': '',
      'is_sec_pass':'',
      'security_pasword':'',
      'is_job_accept':'',
      'level':[null, Validators.required],
      'zoneId':'',
      'file':[null, Validators.required],
      'banner_image':''
      
    });
  }
  goToList() {
    this.router.navigate(['zone']);
  }
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position)=> {
      //console.log(position)
      
      //console.log(position.coords.latitude);
      this.currentCord = position.coords.latitude +', '+position.coords.longitude;      
      //console.log(this.currentCord);      
    })
    this.drawingManager['initialized$'].subscribe(dm => {
      google.maps.event.addListener(dm, 'overlaycomplete', event => {
        this.deleteSelectedOverlay();
        if (event.type !== google.maps.drawing.OverlayType.MARKER) {
          dm.setDrawingMode(null);
          google.maps.event.addListener(event.overlay, 'click', e => {
            this.selectedOverlay = event.overlay;
            this.selectedOverlay.setEditable(false);
          });
          this.selectedOverlay = event.overlay;
        }
        this.extractPath();
      });

      
      
    });
    this.rForm.controls['languageId'].setValue('');
    this.rForm.controls['currencyId'].setValue('');
    this.rForm.controls['zoneId'].setValue(0); 
    this.rForm.controls['is_active'].setValue(false);
    this.rForm.controls['is_sec_pass'].setValue(false); 
    this.rForm.controls['is_job_accept'].setValue(false);
     
    this.getAllLanguages();
    this.getAllCurrencies();
    this.getAllParent();
  }

  public extractPath(){      
      let zoneCords = [];
      let vertices = this.selectedOverlay.getPath();
      let contentString;
      for (let i =0; i < vertices.getLength(); i++) {
        let xy = vertices.getAt(i);
        let individualCord = {
          lat:xy.lat(),
          lng:xy.lng()
        }
        zoneCords.push(individualCord);        
      }
      //console.log(zoneCords);
      this.rForm.controls['fencing'].setValue(zoneCords);
  }

  public deleteSelectedOverlay() {
    if (this.selectedOverlay) {
      this.selectedOverlay.setMap(null);
      delete this.selectedOverlay;
    }
  }

  public addZone(zone){   
    zone.is_active = this.is_active;
    zone.is_job_accept = this.is_job_accept;
    zone.is_sec_pass = this.is_sec_pass;
    this.is_disable = true;
    if(zone.file){
      
      this.serviceService.addServiceWithFile(zone.file).subscribe(res=>{
            
            if(res){              
              if(res.type == 'success'){
                zone.banner_image = res.url;
                delete zone.file;
                this.zoneService.addZone(zone).subscribe(res=>{
                  this.is_disable = false;
                  this.router.navigate(['/zone']);
                },err=>{
                  this.error = "Error Occured, please try again"
                })
              }            
            }else{
              this.is_disable = false;
              this.error = "Error Occured, please try again"
            }         
      
       
      },err=>{
        this.is_disable = false;
        this.error = "Error Occured, please try again"
      })
      }
    
  }

  public getAllLanguages(){
    this.zoneService.getAllLanguages().subscribe(res=>{      
      this.languageList=res;
    })
  }
  public getAllCurrencies(){
    this.zoneService.getAllCurrencies().subscribe(res=>{      
      this.currencyList=res;
    })
  }

  public getAllParent(){
    this.zoneService.getAllParentZones().subscribe(res=>{   
      console.log(res);   
      this.parentZoneList=res;
    })
  }
  public changeIsSecPass($e: any){
     this.is_sec_pass = !this.is_sec_pass;
     
     if(this.is_sec_pass){
      //this.rForm.get('security_pasword').setValidators([Validators.required]);
     }else{
      this.rForm.controls['security_pasword'].setValue('');
      //console.log(this.is_sec_pass);
      //this.rForm.get('security_pasword').setValidators([]);
     }
  }
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
 }
 public changeIsJobAccept($e: any){
  this.is_job_accept = !this.is_job_accept;
  //console.log(this.is_job_accept);
}

public fileChangeListener($event) {
  console.log($event);
  
  const image: any = new Image();
  let file: File = $event.target.files[0];   
  
  
  const myReader: FileReader = new FileReader();
  const that = this;
  myReader.onloadend = function (loadEvent: any) {
    image.src = loadEvent.target.result;
   
    
  };   
      const fd = new FormData();
      fd.append('file', file);        
    this.rForm.controls['file'].setValue(fd);
  
  myReader.readAsDataURL(file);
  
}

}
