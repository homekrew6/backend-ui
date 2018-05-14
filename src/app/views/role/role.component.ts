import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoleService } from '../../services/role.service';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleList=[];
  constructor(private router: Router, private srvc: RoleService) { 

  }

  ngOnInit() {
    this.getAllRole();
  }

  public getAllRole(){
    this.srvc.getRoleTypes().subscribe(res=>{
      //console.log(res);
    const filteredItems=  res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.roleList = filteredItems;
    })
  }

  public deleteRole(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.srvc.deleteRoleTypes(id).subscribe(res=>{
        this.getAllRole();
      },err=>{

      })
    }
  }

}
