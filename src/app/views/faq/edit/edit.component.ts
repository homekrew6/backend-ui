import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  is_active = true;
  public editorOptions: Object = {
    placeholderText: 'Answer',
    heightMin:'250px',
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }
  content: string;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private faqService: FaqService) {
    this.rForm = fb.group({      
      'question': [null, Validators.required],
      'answer': [],
      'is_active': ''    
         
    });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.faqId = params['id'];        
      this.getIndividualFaq(this.faqId);
  });
  }


  goToList() {
    this.router.navigate(['faq']);
  }

  public editFaq(faq){   
    faq.is_active = this.is_active;
    //faq.answer = this.content;
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
      this.content = res.answer;
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
