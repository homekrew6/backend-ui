import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  rForm: FormGroup;
  error: string;  
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,  private settingService: SettingService) { 
    this.rForm = fb.group({      
      'site_name': [null, Validators.required],
      'site_email': [], 
      'address': [],
      'phone': []         
    });
  }

  ngOnInit() {
    this.getSeting();
  }

  public editSetting(setting){   
    
    this.settingService.editSetting(setting).subscribe(res => {      
      this.router.navigate(['/setting']);
    }, err => {
      this.error = 'Error Occured, please try again'
    })
  }

  public getSeting(){
    this.settingService.getSetting().subscribe(res => {
      
      this.rForm.controls['site_name'].setValue(res.site_name);
      this.rForm.controls['site_email'].setValue(res.site_email);
      this.rForm.controls['address'].setValue(res.address);
      this.rForm.controls['phone'].setValue(res.phone);            
      
    }, err => {
      this.error = 'Error Occured, please try again'
    })
  }


}
