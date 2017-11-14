import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FaqService } from '../../../services/faq.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  constructor(private fb: FormBuilder,private router: Router, private faqService: FaqService) {

    this.rForm = fb.group({      
      'question': [null, Validators.required],
      'answer': [null, Validators.required]     
      
    });
   }

  ngOnInit() {
  }

  public addFaq(faq){   
    
    this.faqService.addFaq(faq).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/faq']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
