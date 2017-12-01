import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  currencyId: any;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private currencyService: CurrencyService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required]   
         
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.currencyId = params['id'];        
        this.getIndividualCurrency(this.currencyId);
    });
  }

  public editCurrency(currency){   
    
    this.currencyService.editCurrency(currency,this.currencyId).subscribe(res=>{      
      this.router.navigate(['/currency']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualCurrency(Id){
    this.currencyService.getIndividualCurrency(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name);              
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
