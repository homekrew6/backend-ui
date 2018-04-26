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
  is_active = true;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private currencyService: CurrencyService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'is_active': ''
         
    });
  }
  goToList() {
    this.router.navigate(['currency']);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.currencyId = params['id'];        
        this.getIndividualCurrency(this.currencyId);
    });
  }

  public editCurrency(currency){   
    currency.is_active = this.is_active;
    this.currencyService.editCurrency(currency,this.currencyId).subscribe(res=>{      
      this.router.navigate(['/currency']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualCurrency(Id){
    this.currencyService.getIndividualCurrency(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name);   
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);           
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
