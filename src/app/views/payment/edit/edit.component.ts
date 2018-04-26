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
  is_active = true;
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
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private cmsService: CmsService) {
    this.rForm = fb.group({      
      'title': [null, Validators.required],
      'content': [],     
      'slug': '',
      'is_active': ''
    });
   }
  goToList() {
    this.router.navigate(['cms']);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.cmsId = params['id'];        
        this.getIndividualCms(this.cmsId);
    });
  }

  public editCms(cms){   
    cms.is_active = this.is_active;
    //cms.content = this.content;
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
      this.content = res.content;
      this.rForm.controls['slug'].setValue(res.slug); 
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);      
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }
 
  

}
