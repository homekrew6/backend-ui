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
  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'Phone'
      },
      status: {
        title: 'Status'
      },
    },
    actions: {
      add: false,
      edit:false,
      delete:false,
        custom: [
          {
            name: 'edit',
            title: '<i class="fa fa-pencil" style="margin-left:12px !important;"></i>',
          },
          {
            name: 'delete',
            title: '<i class="fa fa-trash" ></i>',
          },
           {
            name: 'status',
            title: 'Change Status',
          }
        ],
    },
    attr: {
      class: 'table table-bordered'
    },
  };

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  onCustom(event) {
    if (event.action == "delete") {
      this.deleteCustomer(event.data.id);
    }
    else if (event.action == "edit") {
      this.router.navigateByUrl('/customers/edit/' + event.data.id)
    }

    else if (event.action == "status") {
      this.changeStatus(event.data)
    }
  }

  public getAllCustomers(){
    this.customerService.getCustomer().subscribe(res=>{
      //console.log(res);
      res.map((item)=>{
        if(item.is_active==1)
        {
          item.status ="Active";
        }
        else
        {
          item.status = "InActive"
        }
      })
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

  public changeStatus(customer){    
    let customer_status
    if(customer.is_active){
      customer_status = {
        is_active:0
      }
    }else{
      customer_status = {
        is_active:1
      }
    }    
    const confirmMessage = confirm('Do you want to change status?')
    if(confirmMessage ){      
      this.customerService.editCustomer(customer_status,customer.id).subscribe(res=>{
        this.getAllCustomers();
      },err=>{
      })
    }
  }

}
