import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AnswerService } from '../../../services/answer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  questionId : any;
  answerId:any
  rForm: FormGroup;
  error: string;  
  currencyList=[];
  optionList=[{value:'Addition'},{value:'Multiple'}];
  partsList=[{item:'part_price',value:'Part price'},{item:'image',value:'Image gets chosen from the parts'}];
  scopeList=[{item:'global',value:'Global'},{item:'parent',value:'Parent'}];
  constructor(private fb: FormBuilder, private router: Router,private activatedRoute:ActivatedRoute, private answerService: AnswerService) { 
    this.rForm = fb.group({      
      'title': [null, Validators.required],
      'questionId': '',
      'currencyId':'',
      'icon':'',
      'option_price_impact':'',
      'price_impact':'',
      'option_time_impact':'',
      'time_impact':'',
      'parts':'',
      'scope':'',      
      'image':[]
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.questionId = params['questionId']; 
      this.answerId = params['id'];     
    });
    this.getAllCurrencies();
    this.getIndividualAnswer();
  }

  public getAllCurrencies(){
    this.answerService.getAllCurrencies().subscribe(res=>{      
      this.currencyList=res;
    })
  }
  public getIndividualAnswer(){
    this.answerService.getIndividualAnswer(this.answerId).subscribe(res=>{
      
      this.rForm.controls['title'].setValue(res.title);
      this.rForm.controls['questionId'].setValue(res.questionId);
      this.rForm.controls['currencyId'].setValue(res.currencyId); 
      this.rForm.controls['icon'].setValue(res.icon); 
      this.rForm.controls['option_price_impact'].setValue(res.option_price_impact); 
      this.rForm.controls['price_impact'].setValue(res.price_impact); 
      this.rForm.controls['option_time_impact'].setValue(res.option_time_impact);  
      this.rForm.controls['time_impact'].setValue(res.time_impact);   
      this.rForm.controls['parts'].setValue(res.parts);   
      this.rForm.controls['scope'].setValue(res.scope);   

      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public editAnswer(answer){
    this.answerService.editAnswer(answer,this.answerId).subscribe(res=>{      
      this.router.navigate(['/answer/list/'+this.questionId]);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
