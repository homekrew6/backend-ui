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
  constructor(private fb: FormBuilder,private router: Router, private cmsService: CmsService) {
    this.rForm = fb.group({      
      'title': [null, Validators.required],
      'content': [],
      'slug': '',
      'is_active': ''
      
    });
   }

  ngOnInit() {
  }
  public addCms(cms){
    console.log(this.content);
    cms.is_active = this.is_active;
    //cms.content = this.content;
    cms.slug = cms.title.replace(/\s+/g, '-').toLowerCase();
    
    
    this.cmsService.addCms(cms).subscribe(res=>{
      
      this.router.navigate(['/cms']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
 }

}
