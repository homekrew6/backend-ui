import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { VerticalService } from '../../services/vertical.service';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {
  verticalList=[];
  constructor(private router: Router, private verticalService: VerticalService) { }

  ngOnInit() {
    this.getAllVerticals();
  }

  public getAllVerticals(){
    this.verticalService.getVertical().subscribe(res=>{
      //console.log(res);
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.verticalList = filteredItems;
    })
  }
  // public deleteVertical(id){
  //   //console.log(id);
  //   let confirmMessage = confirm('Do you want to delete?')
  //   if(confirmMessage){      
  //     this.verticalService.deleteVertical(id).subscribe(res=>{
  //       this.getAllVerticals();
  //     },err=>{

  //     })
  //   }
  // }

}
