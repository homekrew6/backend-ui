import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CmsService } from '../../services/cms.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {
  cmsList=[];
  constructor(private router: Router, private cmsService: CmsService) { }

  ngOnInit() {
    this.getAllCms();
  }

  public getAllCms(){
    this.cmsService.getCms().subscribe(res=>{
      //console.log(res);
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.cmsList = filteredItems;
    })
  }
  public deleteCms(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.cmsService.deleteCms(id).subscribe(res=>{
        this.getAllCms();
      },err=>{

      })
    }
  }

}
