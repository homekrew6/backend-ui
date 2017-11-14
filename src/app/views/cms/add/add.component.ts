import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CmsService } from '../../../services/cms.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  constructor(private fb: FormBuilder,private router: Router, private cmsService: CmsService) {
    this.rForm = fb.group({      
      'title': [null, Validators.required],
      'content': [null, Validators.required],
      'slug': '',
      
    });
   }

  ngOnInit() {
  }
  public addCms(customer){
    customer.slug = customer.title.replace(/\s+/g, '-').toLowerCase();
    //console.log(customer);
    
    this.cmsService.addCms(customer).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/cms']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
