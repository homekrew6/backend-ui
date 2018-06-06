import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  rForm: FormGroup;
  error: string;
  customerId: any;
  is_active = true;
  customerList = [];
  IsChangeDisabled = false;
  IsChangePassShow = false;
  IsShowSpinner = false;
  IsResetPassword = false;
  success: any;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private customerService: CustomerService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'username': [null],
      //'password': [null, Validators.required],
      'email': [null, Validators.required],
      'is_active': ''
      /*'location': {
        "lat": 0,
        "lng": 0
      },
      'realm': '',
      'image': '',
      'id':''*/

    });
  }
  resetPassword() {
    const newPassword = document.getElementById('newPassword')['value'];

    if (newPassword) {
      this.IsShowSpinner = true;
      this.IsResetPassword = false;
      this.customerService.workerReset({ email: this.rForm.value.email, IsFromAdmin: true }).subscribe((res) => {
        this.customerService.getAdminTempByEmail({ email: this.rForm.value.email }).subscribe((token) => {
          if (token.length > 0) {
            debugger;
            const access_token = token[0].access_token;
            const deleteId=token[0].id;
            const html = 'Hi,<br>Your new password set by Admin is : ' + newPassword + '<br><br>Regards,<br>Krew Team';
            this.customerService.customerResetPassword({ newPassword: newPassword, token: access_token }).subscribe((success) => {
              this.IsChangePassShow = false;
              this.IsChangeDisabled = false;
              this.IsShowSpinner=false;
              this.success = 'Successfully saved.';
              this.customerService.deleteAdminTemp(deleteId).subscribe((res1)=>{

              })
              this.customerService.sendEmail({ to: this.rForm.value.email, subject: 'Password changed by Admin', html:html }).subscribe((res3)=>{
                
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
    // this.customerService.workerReset({ email: this.rForm.value.email, IsFromAdmin: true }).subscribe((res) => {
    //   this.customerService.getAdminTempByEmail({ email: this.rForm.value.email }).subscribe((token) => {
    //     if(token.length>0)
    //     {
    //       const access_token = token[0].access_token;
    //     }
    //   })
    // }, (error) => {
    //   this.error = "Email not found";
    //   window.scrollTo(0, 0);
    // })
  }
  goToList() {
    this.router.navigate(['customers']);
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
    this.customerService.getCustomer().subscribe((res) => {
      this.customerList = res;
    })
    //console.log
    this.activatedRoute.params.subscribe((params: Params) => {
      this.customerId = params['id'];
      //console.log(this.customerId);
      this.getIndividualCustomer(this.customerId);
    });
  }

  public editCustomer(customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].phone == customer.phone && this.customerList[i].id != this.customerId) {
        this.error = 'Phone already exists.';
        window.scrollTo(0, 0);
        return false;
      }
    }
    //console.log(customer);
    customer.is_active = this.is_active;
    this.customerService.editCustomer(customer, this.customerId).subscribe(res => {
      //console.log(res);
      this.router.navigate(['/customers']);
    }, err => {
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualCustomer(Id) {
    this.customerService.getIndividualCustomer(Id).subscribe(res => {
      //console.log(res);
      //console.log(res.email);
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['phone'].setValue(res.phone);
      this.rForm.controls['username'].setValue(res.username);
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);
      //this.rForm.controls['password'].setValue(res.password);
      this.rForm.controls['email'].setValue(res.email);
      //this.rForm.controls['id'].setValue(res.id);      

    }, err => {
      this.error = 'Error Occured, please try again'
    })
  }

  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
