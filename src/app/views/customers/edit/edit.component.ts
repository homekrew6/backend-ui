import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

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
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private customerService: CustomerService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'phone': [null, Validators.required],     
      'username': [null, Validators.required],
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
  goToList() {
    this.router.navigate(['customers']);
  }
  ngOnInit() {
    //console.log
    this.activatedRoute.params.subscribe((params: Params) => {
      this.customerId = params['id'];
      //console.log(this.customerId);
      this.getIndividualCustomer(this.customerId);
  });
  }

  public editCustomer(customer){
    //console.log(customer);
    customer.is_active = this.is_active;
    this.customerService.editCustomer(customer,this.customerId).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/customers']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualCustomer(Id){
    this.customerService.getIndividualCustomer(Id).subscribe(res=>{
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
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
