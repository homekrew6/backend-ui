import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

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
  customerList=[];
  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'username': [null],
      'password': [null, Validators.required],
      'email': [null, Validators.required],
      'is_active': '', 
      'location': {
        'lat': 0,
        'lng': 0
      },
      'realm': '',
      'image': '',

    });
  }
  goToList()
  {
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
    this.customerService.getCustomer().subscribe((res)=>{
      this.customerList=res;
    });
  }
  public addCustomer(customer) {
    customer.is_active = this.is_active;
    this.error="";
    const password_pattern = /(?=.*[A-Z]).{6,}/;
    if (!password_pattern.test(customer.password)) {
      this.error = 'Password must have one capital letter and min six characters';
      window.scrollTo(0,0);
      return false;
    }
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].phone == customer.phone) {
        this.error = 'Phone already exists.';
        window.scrollTo(0, 0);
        return false;
      }
    }
    this.customerService.addCustomer(customer).subscribe(res => {
      console.log(res);
      this.router.navigate(['/customers']);
    }, err => {
      this.error = 'Error Occured, please try again'
    })
  }
  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    // console.log(this.is_active);
  }

}
