import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { WorkerService } from '../../../services/worker.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  workerId: any;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private workerService: WorkerService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'phone': [null, Validators.required],     
      'username': [null, Validators.required],      
      'email': [null, Validators.required]    
      
      
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.workerId = params['id'];
      
      this.getIndividualWorker(this.workerId);
  });
  }

  public editWorker(customer){
    //console.log(customer);
    
    this.workerService.editWorker(customer,this.workerId).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/worker']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualWorker(Id){
    this.workerService.getIndividualWorker(Id).subscribe(res=>{
      //console.log(res);
      //console.log(res.email);
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['phone'].setValue(res.phone);
      this.rForm.controls['username'].setValue(res.username);
      //this.rForm.controls['password'].setValue(res.password);
      this.rForm.controls['email'].setValue(res.email); 
      //this.rForm.controls['id'].setValue(res.id);      
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
