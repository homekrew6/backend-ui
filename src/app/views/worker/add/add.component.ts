import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { WorkerService } from '../../../services/worker.service';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  is_active = true;
  workerList=[];
  constructor(private fb: FormBuilder,private router: Router, private workerService: WorkerService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'phone': [null, Validators.required],     
      'username': '',
      'password': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])], 
      'is_active': '',    
      'location': {
        "lat": 0,
        "lng": 0
      },
      'realm': '',
      'image': '',
      'commission':[]
      
    });
  }
  goToList()
  {
    this.router.navigate(['worker']);
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
    this.workerService.getWorker().subscribe((res)=>{
      this.workerList=res;
    })
  }

  public addWorker(worker){
    worker.is_active = this.is_active;
    let IsActive = true;
    this.error = "";
    const password_pattern = /(?=.*[A-Z]).{6,}/;
    if (!password_pattern.test(worker.password)) {
      this.error = 'Password must have one capital letter and min six characters';
      window.scrollTo(0, 0);
      return false;
    }
   for(let i=0;i<this.workerList.length;i++)
   {
     if(this.workerList[i].phone==worker.phone)
     {
       this.error = 'Phone already exists.';
       window.scrollTo(0, 0);
       IsActive=false
       return false;
     }
   }
    if (this.is_active && worker.commission) {
      let commission = Number(worker.commission);
      if (commission) {

      }
      else {
        IsActive = false;
      }
    }
    else if (this.is_active == true) {
      IsActive = false;
    }
    if(IsActive)
    {
      this.workerService.addWorker(worker).subscribe(res => {
        //console.log(res);
        this.router.navigate(['/worker']);
      }, err => {
        this.error = "Error Occured, please try again"
      })
    }
    else {
      this.error = "Please set the commission to make the worker active.";
      window.scrollTo(0, 0);
    }
   
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
