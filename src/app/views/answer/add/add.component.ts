import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AnswerService } from '../../../services/answer.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  questionId : any;
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
    });
    this.rForm.controls['currencyId'].setValue('');
    this.rForm.controls['parts'].setValue('');
    this.rForm.controls['scope'].setValue('');
    this.rForm.controls['questionId'].setValue(this.questionId);
    this.getAllCurrencies();
  }

  public getAllCurrencies(){
    this.answerService.getAllCurrencies().subscribe(res=>{      
      this.currencyList=res;
    })
  }

  public addAnswer(answer){
    answer.selected=false;
    //console.log(answer);
    this.answerService.addAnswer(answer).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/answer/list/'+this.questionId]);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }


}
