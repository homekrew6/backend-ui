import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyList=[];
  constructor(private router: Router, private currencyService: CurrencyService) { 

  }

  ngOnInit() {
    this.getAllCurrencies();
  }

  public getAllCurrencies(){
    this.currencyService.getCurrency().subscribe(res=>{
      //console.log(res);
      this.currencyList=res;
      console.log(this.currencyList);
    })
  }
  public deleteCurrency(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.currencyService.deleteCurrency(id).subscribe(res=>{
        this.getAllCurrencies();
      },err=>{

      })
    }
  }

}
