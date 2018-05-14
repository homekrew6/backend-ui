import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PromoService } from '../../../services/promo.service';
declare var jquery;
declare var $;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  is_active = true;
  minDate = new Date();
  errorMsg = "";
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
    heightMin: '250px',
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }
  content: string;
  constructor(private fb: FormBuilder, private router: Router, private srvc: PromoService) {
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
      'customerIds': [[]],
      'serviceIds': [[], Validators.required]


    });
  }

  ngOnInit() {
    $('form').on('focus', 'input[type=number]', function (e) {
      $(this).on('mousewheel.disableScroll', function (e) {
        e.preventDefault()
      });
    });
    $('form').on('blur', 'input[type=number]', function (e) {
      $(this).off('mousewheel.disableScroll')
    });
    // this.dropdownList = [
    //   { "id": 1, "itemName": "India" },
    //   { "id": 2, "itemName": "Singapore" },
    //   { "id": 3, "itemName": "Australia" },
    //   { "id": 4, "itemName": "Canada" },
    //   { "id": 5, "itemName": "South Korea" },
    //   { "id": 6, "itemName": "Germany" },
    //   { "id": 7, "itemName": "France" },
    //   { "id": 8, "itemName": "Russia" },
    //   { "id": 9, "itemName": "Italy" },
    //   { "id": 10, "itemName": "Sweden" }
    // ];
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
  goToList() {
    this.router.navigate(['promotions']);
  }
  public addPromoCode(value) {
    // const checkRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    // if (checkRegex.test(value.promo_code)) {
    //   this.errorMsg="";
    //   if (new Date(value.start_date)> (new Date(value.end_date)))
    //   {
    //     this.errorMsg = "Start Date cannot be greater than end date.";
    //     window.scrollTo(0, 0);
    //   }
    // }
    // else {
    //   this.errorMsg="Plesae add alphanumeric code of 6 digits.";
    //   window.scrollTo(0,0);
    // }
    if (this.rForm.valid) {
      this.is_disable = true;
      if (value.start_date && value.end_date) {
        if (new Date(value.start_date) < this.minDate) {
          this.is_disable = false;
          this.errorMsg = "Start Date cannot be less than Current Date.";
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
                        const toCheckData = { "priority": value.priority };
                        this.srvc.checkIfThePriorityIsValid(toCheckData).subscribe((ValidResponse) => {
                          if (ValidResponse.response.message)
                          {
                           this.srvc.addPromo(value).subscribe((addSuccess)=>{
                             if (addSuccess.response.type=="Error")
                             {
                               this.is_disable = false;
                               this.errorMsg = "Please try again later.";
                               window.scrollTo(0, 0);
                             }
                             else
                             {
                               this.is_disable = false;
                               this.router.navigate(['promotions']);
                             }
                            
                           }, (addError)=>{
                             this.is_disable = false;
                             this.errorMsg = "Please try again later.";
                             window.scrollTo(0, 0);
                           })
                          }
                          else
                          {
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

  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }
  generatePromoCode() {

    const promoCode = this.randomString(6, this.chars);
    // $('#promo_code').val(promoCode);
    this.rForm.controls['promo_code'].setValue(promoCode);
    this.rForm.controls['start_date'].setValue(this.rForm.value.start_date);
    this.rForm.controls['end_date'].setValue(this.rForm.value.end_date);
    this.rForm.controls['jobEstimatedHours'].setValue(this.rForm.value.jobEstimatedHours);
    this.rForm.controls['type'].setValue(this.rForm.value.type);
    this.rForm.controls['amount'].setValue(this.rForm.value.amount);
    this.rForm.controls['priority'].setValue(this.rForm.value.priority);
    this.rForm.controls['IsFirstOrderOnly'].setValue(this.rForm.value.IsFirstOrderOnly);
    this.rForm.controls['min_order_amount'].setValue(this.rForm.value.min_order_amount);
    this.rForm.controls['max_discount_amount'].setValue(this.rForm.value.max_discount_amount);
    this.rForm.controls['coupon_count'].setValue(this.rForm.value.coupon_count);
    this.rForm.controls['noOfUses'].setValue(this.rForm.value.noOfUses);
    this.rForm.controls['Labour'].setValue(this.rForm.value.Labour);

  }

  randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)]
    };
    return result;
  }

}
