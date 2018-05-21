import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SettingService } from '../../services/setting.service';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  successMsg: string;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private settingService: SettingService) {
    this.rForm = fb.group({
      'site_name': [null, Validators.required],
      'site_email': [],
      'address': [],
      'phone': [],
      'minimumPostingDiff': [],
      'perHourFollowUpCharge':[]
    });
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
    this.getSeting();
  }

  public editSetting(setting) {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (setting.site_email)
    {
      this.error="";
      if (!regEmail.test(setting.site_email)) {
      this.error="Please give a valid email";
      window.scrollTo(0,0);
      return;
      }
    }
  

    this.settingService.editSetting(setting).subscribe(res => {
      window.scrollTo(0,0);
      this.successMsg = "Updated successfully.";
      // this.router.navigate(['/setting']);
    }, err => {
      this.error = 'Error Occured, please try again'
    })
  }

  public getSeting() {
    this.settingService.getSetting().subscribe(res => {

      this.rForm.controls['site_name'].setValue(res.site_name);
      this.rForm.controls['site_email'].setValue(res.site_email);
      this.rForm.controls['address'].setValue(res.address);
      this.rForm.controls['phone'].setValue(res.phone);
      this.rForm.controls['minimumPostingDiff'].setValue(res.minimumPostingDiff);
      this.rForm.controls['perHourFollowUpCharge'].setValue(res.perHourFollowUpCharge);
    }, err => {
      this.error = 'Error Occured, please try again'
    })
  }


}
