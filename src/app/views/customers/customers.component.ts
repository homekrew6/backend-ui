import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList=[];
  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  public getAllCustomers(){
    this.customerService.getCustomer().subscribe(res=>{
      //console.log(res);
      this.customerList=res;
    })
  }
  public deleteCustomer(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.customerService.deleteCustomer(id).subscribe(res=>{
        this.getAllCustomers();
      },err=>{

      })
    }
  }

}
