import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ZoneService } from '../../../services/zone.service';
import { RoleService } from './../../../services/role.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  agentId: any;
  is_active = true;
  roleTypeLit = [];
  totalParentZoneList = [];
  allZoneList = [];
  filteredZoneList = [];
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private srvc: AuthService,
    private roleSrvc: RoleService, private zoneSrvc: ZoneService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'username': '',
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
          if (item.level > 20 && item.level < 30) {
            this.filteredZoneList.push(item);
          }
        })
      }
    }
  }
  ngOnInit() {
    this.zoneSrvc.getAllZones().subscribe((res) => {
      this.allZoneList = res;
    })
    this.zoneSrvc.getAllParentZones().subscribe((zones) => {
      this.totalParentZoneList = zones;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.agentId = params['id'];

      this.getIndividualAgent(this.agentId);
    });
  }
  goToList() {
    this.router.navigate(['agent']);
  }
  public editagent(admin) {
    console.log(admin);
    admin.is_active = this.is_active;
    this.srvc.editAgent(admin, this.agentId).subscribe(res => {
      //console.log(res);
      this.router.navigate(['/agent']);
    }, err => {
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualAgent(Id) {
    this.roleSrvc.getRoleTypes().subscribe((roles) => {
      let finalList = [];
      roles.map((item) => {

        if (item.name != "admin") {
          if (item.is_active == true) {
            finalList.push(item);
          }
        }
      })
      this.roleTypeLit = finalList;
      this.srvc.getIndividualAgent(Id).subscribe((res) => {
        if (res.response.type == "Success") {
          this.rForm.controls['name'].setValue(res.response.message.name);
          this.rForm.controls['phone'].setValue(res.response.message.phone);
          this.rForm.controls['username'].setValue(res.response.message.username);
          this.rForm.controls['email'].setValue(res.response.message.email);
          this.is_active = res.response.message.is_active;
          this.rForm.controls['is_active'].setValue(res.response.message.is_active);
          this.rForm.controls['role'].setValue(res.response.message.role);
          let finalValue = [];
          let finalString;
          res.response.message.zones.map((item) => {
            if (finalString) {
              finalString = finalString + "," + item.toString();
            }
            else {
              finalString = item.toString();
            }
          });
          finalValue.push(finalString);
          this.rForm.controls['zoneId'].setValue(res.response.message.zones);

          let selectedRole;
          this.roleTypeLit.map((item) => {
            if (item.id == res.response.message.role) {
              selectedRole = item.name;
            }
          });
          if (selectedRole == "Country Admin") {
            this.allZoneList.map((item) => {
              if (item.level > 20 && item.level < 30) {
                this.filteredZoneList.push(item);
              }
            })
          }
        }
        else {
          this.error = "No agent found.";
          window.scrollTo(0, 0);
        }

        // this.rForm.controls['id'].setValue(res.id);      

      })
    })


  }

  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
