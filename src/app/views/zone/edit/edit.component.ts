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

  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private zoneService: ZoneService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'fencing': [null, Validators.required],
      'description': '' 
      
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
  }
  public editZone(zone){  
    
    
    this.zoneService.editZone(zone,this.zoneId).subscribe(res=>{ 
      console.log(res)     
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
      this.rForm.controls['fencing'].setValue(res.fencing); 
      this.rForm.controls['description'].setValue(res.description);
      this.firstCord = res.fencing[0].lat +', '+res.fencing[0].lng;
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
      console.log(zoneCords);
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

}
