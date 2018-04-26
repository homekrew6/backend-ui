import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  zoneList=[];
  languageList=[];
  currencyList=[];
  constructor(private router: Router, private zoneService: ZoneService) { }

  ngOnInit() {
    this.getAllZones();
    
  }

  public getAllZones(){
    this.zoneService.getZone().subscribe(res=>{
      //console.log(res);
      this.zoneList=res;
    })
  }
  
  public deleteZone(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.zoneService.deleteZone(id).subscribe(res=>{
        this.getAllZones();
      },err=>{

      })
    }
  }

}
