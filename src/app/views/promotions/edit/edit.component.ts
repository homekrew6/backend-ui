import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PromoService } from '../../../services/promo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  promotionsId: any;
  is_active = true;
  promoCode:any;
  minDate = new Date();
  errorMsg:any;
  dropdownList = [];
  servicesList = [];
  is_disable = false;
  dropdownSettings = {
    singleSelection: false,
    text: "Select Customers",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };
  dropdownSettings1 = {
    singleSelection: false,
    text: "Select Services",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };
  public editorOptions: Object = {
    placeholderText: 'Content',
    heightMin:'250px',
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }
  content: string;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private srvc: PromoService) {
    this.rForm = fb.group({      
      'promo_code': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
      'start_date': [null, Validators.required],
      'end_date': [null, Validators.required],
      'jobEstimatedHours': [null, Validators.required],
      'type': ['Discount', Validators.required],
      'amount': ['', Validators.required],
      'priority': [0, Validators.required],
      'IsFirstOrderOnly': [false, Validators.required],
      'min_order_amount': ['', Validators.required],
      'max_discount_amount': ['', Validators.required],
      'coupon_count': [0, Validators.required],
      'noOfUses': [0, Validators.required],
      'Labour': ['', Validators.required],
      'customerIds': [[], Validators.required],
      'serviceIds': [[], Validators.required],
      'NoOfUsed': [0]
    });
   }
  goToList() {
    this.router.navigate(['promotions']);
  }
  ngOnInit() {
    this.srvc.getAllCustomersList().subscribe((res) => {
      res.map((item) => {
        const data = { "id": item.id, "itemName": item.name };
        this.dropdownList.push(data);
      });
      this.srvc.getAllServicesList().subscribe((servicesList) => {
        servicesList.map((item) => {
          const data = { "id": item.id, "itemName": item.name };
          this.servicesList.push(data);
        });
      });

    }, (err) => {
      console.log('error', err);
    })
    this.activatedRoute.params.subscribe((params: Params) => {
        this.promotionsId = params['id'];        
      this.getIndividualPromotion(this.promotionsId);
    });
  }

  public editPromoCode(value){   
    if (this.rForm.valid) {
      this.is_disable = true;
      if (value.start_date && value.end_date) {
        if (new Date(value.start_date) < this.minDate) {
          this.is_disable = false;
          this.errorMsg = "Start Date cannot be greater than Current Date.";
          window.scrollTo(0, 0);
        }
        else {
          if (new Date(value.start_date) > (new Date(value.end_date))) {
            this.is_disable = false;
            this.errorMsg = "Start Date cannot be greater than end date.";
            window.scrollTo(0, 0);
          }
          else {
            if (value.amount) {
              if (value.jobEstimatedHours) {
                if (value.max_discount_amount) {
                  if (value.min_order_amount) {
                    if (value.noOfUses && value.priority) {
                      if (value.coupon_count) {
                        if (value.max_discount_amount > value.amount){
                          if (value.amount < value.min_order_amount)
                          {
                            const toCheckData = { "priority": value.priority, "id": this.promotionsId };
                            this.srvc.checkIfThePriorityIsValid(toCheckData).subscribe((ValidResponse) => {
                              if (ValidResponse.response.message) {
                                value.id = this.promotionsId;
                                value.promo_code = this.promoCode;
                                this.srvc.editPromo(value).subscribe((addSuccess) => {
                                  if (addSuccess.response.type == "Error") {
                                    this.is_disable = false;
                                    this.errorMsg = "Please try again later.";
                                    window.scrollTo(0, 0);
                                  }
                                  else {
                                    this.is_disable = false;
                                    this.router.navigate(['promotions']);
                                  }

                                }, (addError) => {
                                  this.is_disable = false;
                                  this.errorMsg = "Please try again later.";
                                  window.scrollTo(0, 0);
                                })
                              }
                              else {
                                this.is_disable = false;
                                this.errorMsg = "A promo code with the same priority already exists.";
                                window.scrollTo(0, 0);
                              }
                            }, (error) => {
                              this.is_disable = false;
                              this.errorMsg = "Please try again later.";
                              window.scrollTo(0, 0);
                            })
                          }
                          else
                          {
                            this.is_disable = false;
                            this.errorMsg = "Amount should be less than min order amount.";
                            window.scrollTo(0, 0);
                          }
                        }
                        else
                        {
                          this.is_disable = false;
                          this.errorMsg = "Max discount amount should be greater than  amount.";
                          window.scrollTo(0, 0);
                        }
                        
                      }
                      else {
                        this.is_disable = false;
                        this.errorMsg = "Coupon count is required.";
                        window.scrollTo(0, 0);
                      }
                    }
                    else {
                      this.is_disable = false;
                      this.errorMsg = "No of uses and priority are required.";
                      window.scrollTo(0, 0);
                    }
                  }
                  else {
                    this.is_disable = false;
                    this.errorMsg = "Min order amount is required.";
                    window.scrollTo(0, 0);
                  }
                }
                else {
                  this.is_disable = false;
                  this.errorMsg = "Max discount amount is required.";
                  window.scrollTo(0, 0);
                }
              }
              else {
                this.is_disable = false;
                this.errorMsg = "Job Estimated hours is required.";
                window.scrollTo(0, 0);
              }
            }
            else {
              this.is_disable = false;
              this.errorMsg = "Please enter amount.";
              window.scrollTo(0, 0);
            }
          }
        }

      }
      else {
        this.is_disable = false;
        this.errorMsg = "Start Date and end date are required.";
        window.scrollTo(0, 0);
      }
    }
  }
  onItemSelect(item: any) {
    console.log(item);
    // console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    //console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  public getIndividualPromotion(Id){
    this.srvc.getIndividualPromo(Id).subscribe(res=>{
      this.srvc.getSelectedServiceForPromo(Id).subscribe((selectedService)=>{
        this.srvc.getSelectedCustomer(Id).subscribe((selectedCustomer)=>{
          this.promoCode = res.promo_code;
          this.rForm.controls['promo_code'].setValue(res.promo_code);
          this.rForm.controls['start_date'].setValue(new Date(res.start_date));
          this.rForm.controls['end_date'].setValue(new Date(res.end_date));
          this.rForm.controls['jobEstimatedHours'].setValue(res.jobEstimatedHours);
          this.rForm.controls['type'].setValue(res.type);
          this.rForm.controls['amount'].setValue(res.amount);
          this.rForm.controls['priority'].setValue(res.priority);
          this.rForm.controls['IsFirstOrderOnly'].setValue(res.IsFirstOrderOnly);
          this.rForm.controls['min_order_amount'].setValue(res.min_order_amount);
          this.rForm.controls['max_discount_amount'].setValue(res.max_discount_amount);
          this.rForm.controls['coupon_count'].setValue(res.coupon_count);
          this.rForm.controls['noOfUses'].setValue(res.noOfUses);
          this.rForm.controls['Labour'].setValue(res.Labour);
          this.rForm.controls['NoOfUsed'].setValue(res.NoOfUsed);
          let selectedCustomerList=[];
          selectedCustomer.map((item)=>{
            const data = { "id": item.id, "itemName": item.customer.name };
            selectedCustomerList.push(data);
          })
          let selectedServicesList = [];
          selectedService.map((item) => {
            const data = { "id": item.id, "itemName": item.service.name };
            selectedServicesList.push(data);
          })
          this.rForm.controls['customerIds'].setValue(selectedCustomerList);
          this.rForm.controls['serviceIds'].setValue(selectedServicesList);    
        })
        
      })
              
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }
 
  

}
