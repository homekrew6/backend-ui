import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ZoneService } from '../../../services/zone.service';
import { ServiceService } from '../../../services/service.service';
import { DrawingManager } from '@ngui/map';
import { AuthService } from './../../../services/auth.service';

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
  IsReadOnly=false;
  is_disable = false;
  role: any;
  parentZoneId='';
  selectedLevel='';
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private zoneService: ZoneService, private serviceService: ServiceService,
    private authService: AuthService) {
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
      'banner_image':'',
      'file':[]
      
    });
    this.editMode = false;
    if (localStorage.getItem("role")) {
      this.role = localStorage.getItem("role");
    }
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
    let IsValid = true;
 
    zone.zoneId=this.parentZoneId;
    zone.level=this.selectedLevel;
    if (this.role) {
      if (this.role == "Country Admin") {
        if (!zone.zoneId) {
          IsValid = false;
          this.error = "Please select a parent for the zone.";
          window.scrollTo(0, 0);
          return;
        }
        if (zone.level > 20 && zone.level <= 30) {

        }
        else {
          IsValid = false;
          this.error = "You can add zone with level from 21 to 30.";
          window.scrollTo(0, 0);
          return;
        }
      }
      else if (this.role == "City Admin") {
        if (!zone.zoneId) {
          IsValid = false;
          this.error = "Please select a parent for the zone.";
          window.scrollTo(0, 0);
          return;
        }
        if (zone.level > 30) {

        }
        else {
          IsValid = false;
          this.error = "You can add zone with level greater than 30";
          window.scrollTo(0, 0);
          return;
        }
      }
      else if (this.role == "admin") {
        if (zone.level < 20 && zone.zoneId) {
          IsValid = false;
          this.error = "You can not add zone parent for level greater than 20.";
          window.scrollTo(0, 0);
          return;
        }
      }
    }
    if(IsValid)
    {
      if (this.role != "admin")
      {
        zone.zoneId=this.parentZoneId;
        zone.level=this.selectedLevel;
      }
      zone.is_active = this.is_active;
      zone.is_job_accept = this.is_job_accept;
      zone.is_sec_pass = this.is_sec_pass;
      this.is_disable = true;
      if (zone.file) {
        this.serviceService.addServiceWithFile(zone.file).subscribe(res => {

          if (res) {
            if (res.type == 'success') {
              zone.banner_image = res.url;
              delete zone.file;
              this.zoneService.editZone(zone, this.zoneId).subscribe(res => {
                //console.log(res)     
                this.is_disable = false;
                this.router.navigate(['/zone']);
              }, err => {
                this.is_disable = false;
                this.error = "Error Occured, please try again"
              })
            }
          } else {
            this.is_disable = false;
            this.error = "Error Occured, please try again"
          }


        }, err => {
          this.is_disable = false;
          this.error = "Error Occured, please try again"
        })
      } else {
        delete zone.file;
        this.zoneService.editZone(zone, this.zoneId).subscribe(res => {
          //console.log(res)     
          this.is_disable = false;
          this.router.navigate(['/zone']);
        }, err => {
          this.is_disable = false;
          this.error = "Error Occured, please try again"
        })
      }
    }
    
    
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
      this.rForm.controls['banner_image'].setValue(res.banner_image);
      console.log(this.rForm.value)
      if(this.role !="admin")
      {
        this.parentZoneId = res.zoneId;
        this.selectedLevel = res.level;
        this.IsReadOnly=true;
        //this.rForm.controls['level'].disable();
        //this.rForm.controls['zoneId'].disable();
      }
     
      
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
  if (this.role == "admin") {
    this.zoneService.getAllParentZones().subscribe(res => {
      this.parentZoneList = res;


    })
  }
  else 
  {
    this.zoneService.getZone().subscribe((res=>{
      this.parentZoneList=res;
    }))
  }
  
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
