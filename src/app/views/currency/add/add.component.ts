import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  is_active = true;
  constructor(private fb: FormBuilder,private router: Router, private currencyService: CurrencyService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'is_active': '', 
      
    });
  }

  ngOnInit() {
  }
  public addCurrency(currency){    
    currency.is_active = this.is_active;
    this.currencyService.addCurrency(currency).subscribe(res=>{      
      this.router.navigate(['/currency']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }
  goToList() {
    this.router.navigate(['currency']);
  }
  

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
 }

}
