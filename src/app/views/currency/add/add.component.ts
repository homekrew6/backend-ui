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
  constructor(private fb: FormBuilder,private router: Router, private currencyService: CurrencyService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required]        
      
    });
  }

  ngOnInit() {
  }
  public addCurrency(currency){    
    this.currencyService.addCurrency(currency).subscribe(res=>{      
      this.router.navigate(['/currency']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
