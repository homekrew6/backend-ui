import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ZoneService } from '../../../services/zone.service';
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
  zoneId: any;
  selectedZone: any;
  selectedOverlay : any;
  editMode: any;
  editClass='hidden';
  currentCord: any;
  firstCord: any;  
  languageList = [];
  currencyList = [];
  parentZoneList = [];
  is_sec_pass = false;
  is_active = true;
  is_job_accept = false;

  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private zoneService: ZoneService) {
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
    this.editMode = false;

   }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position)=> {
      //console.log(position)
      
      //console.log(position.coords.latitude);
      this.currentCord = position.coords.latitude +', '+position.coords.longitude;      
      //console.log(this.currentCord);      
    })
    this.activatedRoute.params.subscribe((params: Params) => {
      this.zoneId = params['id'];        
      this.getIndividualZone(this.zoneId);
  });
  
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
  this.getAllLanguages();
  this.getAllCurrencies();
  this.getAllParent();
  }
  public editZone(zone){  
    zone.is_active = this.is_active;
    zone.is_job_accept = this.is_job_accept;
    zone.is_sec_pass = this.is_sec_pass;    
    this.zoneService.editZone(zone,this.zoneId).subscribe(res=>{ 
      //console.log(res)     
      this.router.navigate(['/zone']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualZone(Id){
    this.zoneService.getIndividualZone(Id).subscribe(res=>{  
      //console.log(res);    
      this.rForm.controls['name'].setValue(res.name);
      this.selectedZone = res.fencing;
      this.firstCord = res.fencing[0].lat +', '+res.fencing[0].lng;
      this.is_sec_pass = res.is_sec_pass;
      this.is_active = res.is_active;
      this.is_job_accept = res.is_job_accept;
      this.rForm.controls['fencing'].setValue(res.fencing); 
      this.rForm.controls['description'].setValue(res.description);
      this.rForm.controls['languageId'].setValue(res.languageId);
      this.rForm.controls['currencyId'].setValue(res.currencyId);
      this.rForm.controls['zoneId'].setValue(res.zoneId); 
      this.rForm.controls['is_active'].setValue(res.is_active);
      this.rForm.controls['is_sec_pass'].setValue(res.is_sec_pass); 
      this.rForm.controls['is_job_accept'].setValue(res.is_job_accept);
      this.rForm.controls['premium'].setValue(res.premium);
      this.rForm.controls['security_pasword'].setValue(res.security_pasword);
      this.rForm.controls['level'].setValue(res.level);
      
      //this.populateMap();        
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
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

public toggleEditMode(){ 
  
  this.editMode=true;
  this.editClass = "";
  //this.deleteSelectedOverlay()
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
    //console.log(res);   
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
