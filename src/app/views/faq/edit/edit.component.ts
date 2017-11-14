import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FaqService } from '../../../services/faq.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  faqId: any;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private faqService: FaqService) {
    this.rForm = fb.group({      
      'question': [null, Validators.required],
      'answer': [null, Validators.required]    
         
    });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.faqId = params['id'];        
      this.getIndividualFaq(this.faqId);
  });
  }

  public editFaq(faq){   
    
    this.faqService.editFaq(faq,this.faqId).subscribe(res=>{      
      this.router.navigate(['/faq']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualFaq(Id){
    this.faqService.getIndividualFaq(Id).subscribe(res=>{
      
      this.rForm.controls['question'].setValue(res.question);
      this.rForm.controls['answer'].setValue(res.answer);            
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
