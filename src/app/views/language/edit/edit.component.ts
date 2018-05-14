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
  is_active = true;
  directionOptionList=[{value:'LTR'},{value:'RTL'}];
  constructor(private fb: FormBuilder ,private router: Router, private activatedRoute: ActivatedRoute, private languageService: LanguageService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'direction': [null, Validators.required],
      'is_active': [true],
      'Code': ['', Validators.required]
         
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.languageId = params['id'];        
        this.getIndividualLanguage(this.languageId);
    });  
  }

  goToList()
  {
    this.router.navigate(['language']);
  }

  public editLanguage(language){   
    language.is_active = this.is_active;
    language.Code = language.Code.toLowerCase();
    this.languageService.editLanguage(language,this.languageId).subscribe(res=>{      
      this.router.navigate(['/language']);
    }, err => {
      this.error = 'Error Occured, please try again'
    })
  }

  public getIndividualLanguage(Id){
    this.languageService.getIndividualLanguage(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['direction'].setValue(res.direction);
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);   
      this.rForm.controls['Code'].setValue(res.Code);           
      
    },err=> {
      this.error = 'Error Occured, please try again'
    })
  }
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    // console.log(this.is_active);
  }

}
