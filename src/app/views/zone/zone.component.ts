import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ZoneService } from '../../services/zone.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  zoneList = [];
  languageList = [];
  currencyList = [];
  role: any;
  constructor(private router: Router, private zoneService: ZoneService, private srvc: AuthService) {
    if (localStorage.getItem("role")) {
      this.role = localStorage.getItem("role");
    }
  }

  ngOnInit() {
    this.getAllZones();

  }

  public getAllZones() {
    this.zoneService.getZone().subscribe(res => {
      //console.log(res);
      if (this.role == "admin") {
        this.zoneList = res;
      }
     
      else {
        this.srvc.getIndividualAgent(localStorage.getItem('userId')).subscribe((agentDetails) => {
          let myZoneList = [];
          if (agentDetails.response.type == "Success") {
            if (agentDetails.response.message.zones) {
              agentDetails.response.message.zones.map((item) => {
                myZoneList.push(item);
              });
              let finalList=[];
              res.map((item)=>{
                if (myZoneList.includes(item.id) || (myZoneList.includes(item.zoneId)))
                {
                  finalList.push(item);
                }
              });
              this.zoneList=finalList;
            }
          }
        })
      }


    })
  }

  public deleteZone(id) {
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if (confirmMessage) {
      this.zoneService.deleteZone(id).subscribe(res => {
        this.getAllZones();
      }, err => {

      })
    }
  }

}
