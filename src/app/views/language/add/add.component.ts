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
  directionOptionList=[{value:'LTR'},{value:'RTL'}];
  constructor(private fb: FormBuilder,private router: Router, private languageService: LanguageService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'direction': [null, Validators.required]     
      
    });
  }

  ngOnInit() {
    this.rForm.controls['direction'].setValue('');
  }
  public addLanguage(language){   
    console.log(language);
    this.languageService.addLanguage(language).subscribe(res=>{      
      this.router.navigate(['/language']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
