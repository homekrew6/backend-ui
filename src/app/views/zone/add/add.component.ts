import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ZoneService } from '../../../services/zone.service';
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
  constructor(private fb: FormBuilder,private router: Router, private zoneService: ZoneService) { 
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
      'zoneId':''
      
    });
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
    //console.log(zone)
    this.zoneService.addZone(zone).subscribe(res=>{
      
      this.router.navigate(['/zone']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
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

}
