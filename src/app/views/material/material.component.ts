import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialsComponent implements OnInit {
  materialsList=[];
  constructor(private router: Router, private srvc: MaterialService) { }

  ngOnInit() {
    this.getAllMaterials();
  }

  public getAllMaterials(){
    this.srvc.getMaterial().subscribe(res=>{
      //console.log(res);
      this.materialsList=res;
    })
  }
  public deleteMaterial(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.srvc.deleteMaterial(id).subscribe(res=>{
        this.getAllMaterials();
      },err=>{

      })
    }
  }

}
