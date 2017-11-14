import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CmsService } from '../../../services/cms.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  cmsId: any;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private cmsService: CmsService) {
    this.rForm = fb.group({      
      'title': [null, Validators.required],
      'content': [null, Validators.required],     
      'slug': ''      
    });
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.cmsId = params['id'];        
        this.getIndividualCms(this.cmsId);
    });
  }

  public editCms(cms){   
    
    this.cmsService.editCms(cms,this.cmsId).subscribe(res=>{      
      this.router.navigate(['/cms']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualCms(Id){
    this.cmsService.getIndividualCms(Id).subscribe(res=>{
      
      this.rForm.controls['title'].setValue(res.title);
      this.rForm.controls['content'].setValue(res.content);
      this.rForm.controls['slug'].setValue(res.slug);      
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
