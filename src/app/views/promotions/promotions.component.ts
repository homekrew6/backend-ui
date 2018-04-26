import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PromoService } from '../../services/promo.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promosList=[];
  constructor(private router: Router, private srvc: PromoService) { }

  ngOnInit() {
    this.getAllPromos();
  }

  public getAllPromos(){
    this.srvc.getPromo().subscribe(res=>{
      //console.log(res);
      this.promosList=res;
    })
  }
  public deletePromo(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.srvc.deletePromo(id).subscribe(res=>{
        this.getAllPromos();
      },err=>{

      })
    }
  }

}
