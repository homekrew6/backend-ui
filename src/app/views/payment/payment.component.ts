import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentList=[];
  settings = {
    columns: {
      customer: {
        title: 'Customer',
        valuePrepareFunction: (cell, row) => { return row.customer.name }
      },
      message: {
        title: 'Message'
      },
      transactionCode: {
        title: 'Transaction Code'
      },
      amount: {
        title: 'Amount'
      },
      paymentDate: {
        title: 'Payment Date',
        valuePrepareFunction: (cell, row) => { const raw = new Date(row.paymentDate); const formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss'); return formatted; }
      }
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
        },
        {
          name: 'status',
          title: 'Change Status',
        },
        {
          name: 'type',
          title: 'Change Type',
        }
      ],
    },
    
    attr: {
      class: 'table table-bordered'
    },


  }
  constructor(private router: Router, private srvc: PaymentService) { }

  ngOnInit() {
    this.getAllPayment();
  }

  public getAllPayment(){
    this.srvc.getPayment().subscribe(res=>{
      //console.log(res);
      this.paymentList=res;
    })
  }


  public deletePayment(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.srvc.deletePayment(id).subscribe(res=>{
        this.getAllPayment();
      },err=>{

      })
    }
  }

}
