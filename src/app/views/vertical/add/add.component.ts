import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { VerticalService } from '../../../services/vertical.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  constructor(private fb: FormBuilder,private router: Router, private verticalService: VerticalService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required]    
      
    });
   }

  ngOnInit() {
  }

  public addVertical(vertical){   
    
    this.verticalService.addVertical(vertical).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/vertical']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
