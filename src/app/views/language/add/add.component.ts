import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  is_active = true;
  directionOptionList=[{value:'LTR'},{value:'RTL'}];
  constructor(private fb: FormBuilder,private router: Router, private languageService: LanguageService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'direction': [null, Validators.required],
      'is_active': [true],
      'Code': ['', Validators.required]
      
    });
  }

  goToList() {
    this.router.navigate(['language']);
  }
  ngOnInit() {
    this.rForm.controls['direction'].setValue('');
  }
  public addLanguage(language){   
    language.is_active = this.is_active;
    language.Code=language.Code.toLowerCase();
    this.languageService.addLanguage(language).subscribe(res=>{      
      this.router.navigate(['/language']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
