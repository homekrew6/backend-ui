import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  is_active = true;
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
  }
  public addCustomer(customer) {
    customer.is_active = this.is_active;
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
