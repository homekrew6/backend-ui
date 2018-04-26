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
  constructor(private fb: FormBuilder, private router: Router, private faqService: FaqService) {

    this.rForm = fb.group({      
      'question': [null, Validators.required],
      'answer': [] ,
      'is_active': ''    
      
    });
   }

  ngOnInit() {
  }


  goToList() {
    this.router.navigate(['faq']);
  }

  public addFaq(faq){   
    faq.is_active = this.is_active;
    //faq.answer = this.content;
    this.faqService.addFaq(faq).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/faq']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
