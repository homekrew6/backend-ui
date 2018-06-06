import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { WorkerService } from '../../../services/worker.service';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  workerId: any;
  is_active = true;
  workerList = [];
  IsChangeDisabled=false;
  IsChangePassShow = false;
  IsShowSpinner = false;
  IsResetPassword = false;
  success: any;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private workerService: WorkerService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'username': '',
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'is_active': '',
      'commission': []

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
    this.workerService.getWorker().subscribe((res) => {
      this.workerList = res;
    })
    this.activatedRoute.params.subscribe((params: Params) => {
      this.workerId = params['id'];

      this.getIndividualWorker(this.workerId);
    });
  }

  resetPassword() {
    const newPassword = document.getElementById('newPassword')['value'];

    if (newPassword) {
      this.IsShowSpinner = true;
      this.IsResetPassword = false;
      this.workerService.workerReset({ email: this.rForm.value.email, IsFromAdmin: true }).subscribe((res) => {
        this.workerService.getAdminTempByEmail({ email: this.rForm.value.email }).subscribe((token) => {
          if (token.length > 0) {
            debugger;
            const access_token = token[0].access_token;
            const deleteId = token[0].id;
            const html = 'Hi,<br>Your new password set by Admin is : ' + newPassword + '<br><br>Regards,<br>Krew Team';
            this.workerService.workerResetPassword({ newPassword: newPassword, token: access_token }).subscribe((success) => {
              this.IsChangePassShow = false;
              this.IsChangeDisabled = false;
              this.IsShowSpinner = false;
              this.success = 'Successfully saved.';
              this.workerService.deleteAdminTemp(deleteId).subscribe((res1) => {

              })
              this.workerService.sendEmail({ to: this.rForm.value.email, subject: 'Password changed by Admin', html: html }).subscribe((res3) => {

              })
            })
          }
        })
      }, (error) => {
        this.error = 'Email not found';
        window.scrollTo(0, 0);
      })
    }
    else {
      this.error = "Please type new password.";
      window.scrollTo(0, 0);
    }
  }
  changePassword() {
    this.IsChangePassShow = true;
    this.IsResetPassword = true;
  }
  goToList() {
    this.router.navigate(['worker']);
  }
  public editWorker(worker) {
    for (let i = 0; i < this.workerList.length; i++) {
      if (this.workerList[i].phone == worker.phone && this.workerList[i].id != this.workerId) {
        this.error = 'Phone already exists.';
        window.scrollTo(0, 0);
        return false;
      }
    }
    //console.log(worker);
    worker.is_active = this.is_active;
    let IsActive = true;
    if (this.is_active && worker.commission) {
      let commission = Number(worker.commission);
      if (commission) {

      }
      else {
        IsActive = false;
      }
    }
    else if (this.is_active == true) {
      IsActive = false;
    }
    if (IsActive) {
      this.workerService.editWorker(worker, this.workerId).subscribe(res => {
        //console.log(res);
        this.router.navigate(['/worker']);
      }, err => {
        this.error = "Error Occured, please try again"
      })
    }
    else {
      this.error = "Please set the commission to make the worker active.";
      window.scrollTo(0, 0);
    }

  }

  public getIndividualWorker(Id) {
    this.workerService.getIndividualWorker(Id).subscribe(res => {
      // console.log(res);
      // console.log(res.email);
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['phone'].setValue(res.phone);
      this.rForm.controls['username'].setValue(res.username);
      // this.rForm.controls['password'].setValue(res.password);
      this.rForm.controls['email'].setValue(res.email);
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);
      this.rForm.controls['commission'].setValue(res.commission);
      // this.rForm.controls['id'].setValue(res.id);      

    }, err => {
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
