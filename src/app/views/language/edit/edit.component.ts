import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;  
  error: string; 
  languageId:Number;
  directionOptionList=[{value:'LTR'},{value:'RTL'}];
  constructor(private fb: FormBuilder ,private router: Router, private activatedRoute: ActivatedRoute, private languageService: LanguageService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'direction': [null, Validators.required]    
         
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.languageId = params['id'];        
        this.getIndividualLanguage(this.languageId);
    });  
  }

  public editLanguage(language){   
    
    this.languageService.editLanguage(language,this.languageId).subscribe(res=>{      
      this.router.navigate(['/language']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualLanguage(Id){
    this.languageService.getIndividualLanguage(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['direction'].setValue(res.direction);            
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
