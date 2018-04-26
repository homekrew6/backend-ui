import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CancelReasonService  } from '../../services/cancelReason.service';

@Component({
  selector: 'app-cancelReason',
  templateUrl: './cancelReason.component.html',
  styleUrls: ['./cancelReason.component.css']
})
export class CancelReasonComponent implements OnInit {
  cancelReasonList=[];
  constructor(private router: Router, private cancelSrvc: CancelReasonService) { }

  ngOnInit() {
    this.getAllReasons();
  }

  public getAllReasons(){
    this.cancelSrvc.getCancelReason().subscribe(res=>{
      //console.log(res);
      this.cancelReasonList=res;
    })
  }
  public deleteReason(id){
    const confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.cancelSrvc.deleteCancelReason(id).subscribe(res=>{
        this.getAllReasons();
      },err=>{

      })
    }
  }

}
