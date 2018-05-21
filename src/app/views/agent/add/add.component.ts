import { RoleService } from './../../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ZoneService } from '../../../services/zone.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  is_active = true;
  roleTypeLit: any = [];
  totalParentZoneList = [];
  allZoneList = [];
  filteredZoneList = [];
  constructor(private fb: FormBuilder, private router: Router, private srvc: AuthService, private roleSrvc: RoleService,
    private zoneSrvc: ZoneService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'username': '',
      'password': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'is_active': [true],
      'role': ['', Validators.required],
      'zoneId': ['', Validators.required]

    });
  }



  onRoleChange(value) {
    let selectedRole;
    this.roleTypeLit.map((item) => {
      if (item.id == value) {
        selectedRole = item.name;
      }
    });
    
    if (selectedRole) {
      this.filteredZoneList = [];
      if (selectedRole == "Country Admin") {
        this.allZoneList.map((item) => {
          //  if(item.level>20 && item.level<30)
          //  {
          //    this.filteredZoneList.push(item);
          //  }
          if (!item.zoneId) {
            this.filteredZoneList.push(item);
          }
        })
        this.rForm.controls['zoneId'].setValidators([Validators.required]);
        this.rForm.controls['zoneId'].updateValueAndValidity();
      }
      else if (selectedRole == "City Admin") {
        this.rForm.controls['zoneId'].setValidators([Validators.required]);
        this.rForm.controls['zoneId'].updateValueAndValidity()
        let parentZoneList = [];
        this.allZoneList.map((item) => {
          //  if(item.level>20 && item.level<30)
          //  {
          //    this.filteredZoneList.push(item);
          //  }
          if (item.zoneId) {
            parentZoneList.push(item);
          }
        });
        let finalList = [];
        // parentZoneList.map((item) => {
        //   const filteredItem = this.allZoneList.filter(item1 => item1.id == item.zoneId);
        //   if (filteredItem.length > 0 && filteredItem[0].zoneId) {
        //     finalList.push(filteredItem[0]);
        //   }

        // })
        for(let i=0;i< parentZoneList.length;i++)
        {
          const filteredItem = this.allZoneList.filter(item1 => item1.id == parentZoneList[i].zoneId);
            if (filteredItem.length > 0 && filteredItem[0].zoneId) {
              finalList.push(parentZoneList[i]);
            }
        }
        console.log(finalList);
        this.filteredZoneList=finalList;
      }
      else if(selectedRole=="Support")
      {
        this.rForm.controls['zoneId'].setValidators([]);
        this.rForm.controls['zoneId'].updateValueAndValidity()
      }
    }
  }
  goToList() {
    this.router.navigate(['agent']);
  }
  ngOnInit() {
    $('form').on('focus', 'input[type=number]', function (e) {
      $(this).on('mousewheel.disableScroll', function (e) {
        e.preventDefault()
      });
    });
    $('form').on('blur', 'input[type=number]', function (e) {
      $(this).off('mousewheel.disableScroll')
    });


    this.zoneSrvc.getAllZones().subscribe((res) => {
      this.allZoneList = res;
    })
    this.zoneSrvc.getAllParentZones().subscribe((zones) => {
      this.totalParentZoneList = zones;
    });
    this.roleSrvc.getRoleTypes().subscribe((roles) => {
      let finalList = [];
      roles.map((item) => {
        if (item.name.toLowerCase() != "admin") {
          if (item.is_active == true) {
            finalList.push(item);
          }
        }
      })
      this.roleTypeLit = finalList;
    })
  }

  public addAgent(agent) {
    agent.is_active = this.is_active;
    this.srvc.addAgent(agent).subscribe(res => {
      //console.log(res);
      this.router.navigate(['/agent']);
    }, err => {
      this.error = "Error Occured, please try again"
    })

  }

  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
