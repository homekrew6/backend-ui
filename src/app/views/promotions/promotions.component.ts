import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PromoService } from '../../services/promo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promosList=[];
  settings = {
    columns: {
      promo_code: {
        title: 'Code',
      },
      start_date: {
        title: 'Start Date',
        valuePrepareFunction: (cell, row) => { const raw = new Date(row.start_date); const formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss'); return formatted; }
      },
      end_date: {
        title: 'End Date',
        valuePrepareFunction: (cell, row) => { const raw = new Date(row.end_date); const formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss'); return formatted; }
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'edit',
          title: '<i class="fa fa-pencil"></i>',
        },
        {
          name: 'delete',
          title: '<i class="fa fa-trash" ></i>',
        }
      ],
    },
    attr: {
      class: 'table table-bordered'
    },


  };
  constructor(private router: Router, private srvc: PromoService) { }

  ngOnInit() {
    this.getAllPromos();
  }

  onCustom(event) {

    if (event.action == "delete") {
      this.deletePromo(event.data.id);
    }

    else if (event.action == "edit") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.router.navigateByUrl('/promotions/edit/' + event.data.id)
    }

  }

  public getAllPromos(){
    this.srvc.getPromo().subscribe(res=>{
      //console.log(res);
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.promosList = filteredItems;
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
