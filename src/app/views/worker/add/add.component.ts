import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { WorkerService } from '../../../services/worker.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  is_active = true;
  constructor(private fb: FormBuilder,private router: Router, private workerService: WorkerService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'phone': [null, Validators.required],     
      'username': [null, Validators.required],
      'password': [null, Validators.required],
      'email': [null, Validators.required], 
      'is_active': '',    
      'location': {
        "lat": 0,
        "lng": 0
      },
      'realm': '',
      'image': '',
      
    });
  }

  ngOnInit() {
  }

  public addWorker(worker){
    worker.is_active = this.is_active;
    this.workerService.addWorker(worker).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/worker']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
