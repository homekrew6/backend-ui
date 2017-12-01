import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuestionService } from '../../../services/question.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  rModalForm: FormGroup;
  error: string;  
  typeSelected = '';
  typeModalSelected = '';
  radioOptionSelected = 0;
  radioModalOptionSelected = 0;
  serviceList = [];
  subQuestions = [];
  questionId:any;
  questionTypeList=[{id:1,name:"Number"},{id:2,name:"Boolean"},{id:3,name:"Radio"},{id:4,name:"Range"},{id:5,name:"Photo"}];
  radioOptionList=[{value:2},{value:3},{value:4},{value:5}];
  constructor(private fb: FormBuilder ,private router: Router, private activatedRoute:ActivatedRoute, private questionService: QuestionService) { 
    this.rForm = fb.group({      
      'type': [null, Validators.required],
      'name': [null, Validators.required],
      'range_name': '',
      'start_range': '',
      'end_range': '',
      'no_of_option':'',
      'option_list':[],
      'option1':'',
      'option2':'',
      'option3':'',
      'option4':'',
      'option5':'',
      'serviceId':[null, Validators.required]
      
    });

    this.rModalForm = fb.group({      
      'type': [null, Validators.required],
      'name': [null, Validators.required],
      'range_name': '',
      'start_range': '',
      'end_range': '',
      'no_of_option':'',
      'option_list':[],
      'option1':'',
      'option2':'',
      'option3':'',
      'option4':'',
      'option5':'',
      'serviceId':'',
      'id':''
      
    });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.questionId = params['id'];        
        this.getIndividualQuestion(this.questionId);
    });
    this.getAllService();
  }
  public getAllService(){
    this.questionService.getAllService().subscribe(res=>{
      //console.log(res);
      this.serviceList=res;
    })
    
  }
  
  public getIndividualQuestion(questionId){
    this.questionService.getIndividualQuestion(questionId).subscribe(res=>{
      console.log(res);
      //this.serviceList=res;
      this.subQuestions = res.questions;
      this.rForm.controls['type'].setValue(res.type);
      this.typeSelected = res.type;
      this.rForm.controls['serviceId'].setValue(res.serviceId);
      this.rForm.controls['name'].setValue(res.name);
      if(res.type == 3){
        this.radioOptionSelected = res.option.length;
        this.rForm.controls['no_of_option'].setValue(res.option.length);
        for (let i =0; i < res.option.length ; i++) {
          //this.rForm.get('option'+(i+1)).setValidators([Validators.required]);
          this.rForm.controls['option'+(i+1)].setValue(res.option[i].option);
        }
      }else if(res.type == 4){
        this.rForm.controls['range_name'].setValue(res.option[0].range_name);
        this.rForm.controls['start_range'].setValue(res.option[0].start_range);
        this.rForm.controls['end_range'].setValue(res.option[0].end_range);
      }
    })    
  }

  public editQuestion(question){
    let questionObj = {
      name: question.name,
      type: question.type,
      serviceId: question.serviceId,
      parent_id:0,
      option:[]
    }
    if(question.type == 3){
      if(question.option1 !=''){
        questionObj.option.push({option:question.option1})
      }
      if(question.option2 !=''){
        questionObj.option.push({option:question.option2})
      }
      if(question.option3 !=''){
        questionObj.option.push({option:question.option3})
      }
      if(question.option4 !=''){
        questionObj.option.push({option:question.option4})
      }
      if(question.option5 !=''){
        questionObj.option.push({option:question.option5})
      }
      
    }else if(question.type == 4){
      questionObj.option.push({range_name:question.range_name})
      questionObj.option.push({start_range:question.start_range})
      questionObj.option.push({end_range:question.end_range})
    }else{
      questionObj.option = [];
    }
    //console.log(questionObj);
    this.questionService.editQuestion(questionObj,this.questionId).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/question']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeQuestionType(questionType){
    //console.log(questionType)
    this.typeSelected = questionType;
    //console.log(questionType);
    this.radioOptionSelected = 0;
    if(questionType == 4){
      this.rForm.get('no_of_option').setValidators([]);
      this.rForm.get('option1').setValidators([]);
      this.rForm.get('option2').setValidators([]);
      this.rForm.get('option3').setValidators([]);
      this.rForm.get('option4').setValidators([]);
      this.rForm.get('option5').setValidators([]);
      //this.rForm.controls['no_of_option'].setValue('');
      //this.rForm.controls['option1'].setValue('');
      //this.rForm.controls['option2'].setValue('');
      //this.rForm.controls['option3'].setValue('');
      //this.rForm.controls['option4'].setValue('');
      //this.rForm.controls['option5'].setValue('');
      
      this.rForm.get('range_name').setValidators([Validators.required]);
      this.rForm.get('start_range').setValidators([Validators.required]);
      this.rForm.get('end_range').setValidators([Validators.required]);
    }else if(questionType == 3){
      this.rForm.get('range_name').setValidators([]);
      this.rForm.get('start_range').setValidators([]);
      this.rForm.get('end_range').setValidators([]);
      this.rForm.get('option1').setValidators([]);
      this.rForm.get('option2').setValidators([]);
      this.rForm.get('option3').setValidators([]);
      this.rForm.get('option4').setValidators([]);
      this.rForm.get('option5').setValidators([]);
      //this.rForm.controls['range_name'].setValue('');
      //this.rForm.controls['start_range'].setValue('');
      //this.rForm.controls['end_range'].setValue('');
      this.rForm.get('no_of_option').setValidators([Validators.required]);
    }else{
      
      this.rForm.get('range_name').setValidators([]);
      this.rForm.get('start_range').setValidators([]);
      this.rForm.get('end_range').setValidators([]);
      this.rForm.get('no_of_option').setValidators([]);
      this.rForm.get('option1').setValidators([]);
      this.rForm.get('option2').setValidators([]);
      this.rForm.get('option3').setValidators([]);
      this.rForm.get('option4').setValidators([]);
      this.rForm.get('option5').setValidators([]);
      //this.rForm.controls['no_of_option'].setValue('');
      //this.rForm.controls['option1'].setValue('');
      //this.rForm.controls['option2'].setValue('');
      //this.rForm.controls['option3'].setValue('');
      //this.rForm.controls['option4'].setValue('');
      //this.rForm.controls['option5'].setValue('');
      //this.rForm.controls['range_name'].setValue('');
      //this.rForm.controls['start_range'].setValue('');
      //this.rForm.controls['end_range'].setValue('');
    }

  }
  public changeRadioOption(optionType){
    this.radioOptionSelected = optionType;
    this.rForm.get('option1').setValidators([]);
    this.rForm.get('option2').setValidators([]);
    this.rForm.get('option3').setValidators([]);
    this.rForm.get('option4').setValidators([]);
    this.rForm.get('option5').setValidators([]);
    for (let i =0; i < optionType ; i++) {
      this.rForm.get('option'+(i+1)).setValidators([Validators.required]);
    }

  }


  public showPopupQuestion(largeModal){
    
    this.typeModalSelected = '';
    this.radioModalOptionSelected = 0;
    this.rModalForm.controls['type'].setValue('');
    //this.rModalForm.controls['serviceId'].setValue('');
    this.rModalForm.controls['name'].setValue('');
    this.rModalForm.controls['range_name'].setValue('');
    this.rModalForm.controls['start_range'].setValue('');
    this.rModalForm.controls['end_range'].setValue('');
    this.rModalForm.controls['no_of_option'].setValue('');
    this.rModalForm.controls['option1'].setValue('');
    this.rModalForm.controls['option2'].setValue('');
    this.rModalForm.controls['option3'].setValue('');
    this.rModalForm.controls['option4'].setValue('');
    this.rModalForm.controls['option5'].setValue('');
    largeModal.show();    
  }

  public editModalQuestion(question,largeModal){
    
      //this.serviceList=res;
      
      this.rModalForm.controls['type'].setValue(question.type);      
      this.typeModalSelected = question.type;
      this.rModalForm.controls['serviceId'].setValue(question.serviceId);
      this.rModalForm.controls['name'].setValue(question.name);
      if(question.type == 3){
        this.radioModalOptionSelected = question.option.length;
        this.rModalForm.controls['no_of_option'].setValue(question.option.length);
        for (let i =0; i < question.option.length ; i++) {
          //this.rModalForm.get('option'+(i+1)).setValidators([Validators.required]);
          this.rModalForm.controls['option'+(i+1)].setValue(question.option[i].option);
        }
      }else if(question.type == 4){
        this.rModalForm.controls['range_name'].setValue(question.option[0].range_name);
        this.rModalForm.controls['start_range'].setValue(question.option[0].start_range);
        this.rModalForm.controls['end_range'].setValue(question.option[0].end_range);
      }
      this.rModalForm.controls['id'].setValue(question.id);
      largeModal.show();
        
  }

  public changeModalQuestionType(questionType){
    console.log(questionType)
    this.typeModalSelected = questionType;
    
    this.radioModalOptionSelected = 0;
    if(questionType == 4){
      this.rModalForm.get('no_of_option').setValidators([]);
      this.rModalForm.get('option1').setValidators([]);
      this.rModalForm.get('option2').setValidators([]);
      this.rModalForm.get('option3').setValidators([]);
      this.rModalForm.get('option4').setValidators([]);
      this.rModalForm.get('option5').setValidators([]);
      this.rModalForm.controls['no_of_option'].setValue('');
      this.rModalForm.controls['option1'].setValue('');
      this.rModalForm.controls['option2'].setValue('');
      this.rModalForm.controls['option3'].setValue('');
      this.rModalForm.controls['option4'].setValue('');
      this.rModalForm.controls['option5'].setValue('');
      
      this.rModalForm.get('range_name').setValidators([Validators.required]);
      this.rModalForm.get('start_range').setValidators([Validators.required]);
      this.rModalForm.get('end_range').setValidators([Validators.required]);
    }else if(questionType == 3){
      this.rModalForm.get('range_name').setValidators([]);
      this.rModalForm.get('start_range').setValidators([]);
      this.rModalForm.get('end_range').setValidators([]);
      this.rModalForm.get('option1').setValidators([]);
      this.rModalForm.get('option2').setValidators([]);
      this.rModalForm.get('option3').setValidators([]);
      this.rModalForm.get('option4').setValidators([]);
      this.rModalForm.get('option5').setValidators([]);
      this.rModalForm.controls['range_name'].setValue('');
      this.rModalForm.controls['start_range'].setValue('');
      this.rModalForm.controls['end_range'].setValue('');
      this.rModalForm.get('no_of_option').setValidators([Validators.required]);
    }else{
      
      this.rModalForm.get('range_name').setValidators([]);
      this.rModalForm.get('start_range').setValidators([]);
      this.rModalForm.get('end_range').setValidators([]);
      this.rModalForm.get('no_of_option').setValidators([]);
      this.rModalForm.get('option1').setValidators([]);
      this.rModalForm.get('option2').setValidators([]);
      this.rModalForm.get('option3').setValidators([]);
      this.rModalForm.get('option4').setValidators([]);
      this.rModalForm.get('option5').setValidators([]);
      this.rModalForm.controls['no_of_option'].setValue('');
      this.rModalForm.controls['option1'].setValue('');
      this.rModalForm.controls['option2'].setValue('');
      this.rModalForm.controls['option3'].setValue('');
      this.rModalForm.controls['option4'].setValue('');
      this.rModalForm.controls['option5'].setValue('');
      this.rModalForm.controls['range_name'].setValue('');
      this.rModalForm.controls['start_range'].setValue('');
      this.rModalForm.controls['end_range'].setValue('');
    }

  }
  public changeModalRadioOption(optionType){
    this.radioModalOptionSelected = optionType;
    this.rModalForm.get('option1').setValidators([]);
    this.rModalForm.get('option2').setValidators([]);
    this.rModalForm.get('option3').setValidators([]);
    this.rModalForm.get('option4').setValidators([]);
    this.rModalForm.get('option5').setValidators([]);
    for (let i =0; i < optionType ; i++) {
      this.rModalForm.get('option'+(i+1)).setValidators([Validators.required]);
    }

  }

  public addModalQuestion(question,largeModal){
    
    let questionObj = {
      name: question.name,
      type: question.type,
      serviceId: this.rForm.value.serviceId,
      parent_id:this.questionId,
      option:[]
    }
    if(question.type == 3){
      if(question.option1 !=''){
        questionObj.option.push({option:question.option1})
      }
      if(question.option2 !=''){
        questionObj.option.push({option:question.option2})
      }
      if(question.option3 !=''){
        questionObj.option.push({option:question.option3})
      }
      if(question.option4 !=''){
        questionObj.option.push({option:question.option4})
      }
      if(question.option5 !=''){
        questionObj.option.push({option:question.option5})
      }
      
    }else if(question.type == 4){
      questionObj.option.push({range_name:question.range_name})
      questionObj.option.push({start_range:question.start_range})
      questionObj.option.push({end_range:question.end_range})
    }else{
      questionObj.option = [];
    }
    //this.subQuestions.push(questionObj)
    if(question.id != ''){
      largeModal.hide();
    }else{
      this.questionService.addQuestion(questionObj).subscribe(res=>{
        this.getAllChildQuestion();
        largeModal.hide();
  
      },err=>{
        this.error = "Error Occured, please try again"
      })
    }
    
    
    //console.log(this.subQuestions);    
    
  }
  public getAllChildQuestion(){
    this.questionService.getChildQuestion(this.questionId).subscribe(res=>{
      this.subQuestions = res;      
    },err=>{

    })
  }
  public deleteModalQuestion(id){
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){  
      this.questionService.deleteQuestion(id).subscribe(res=>{
        this.getAllChildQuestion();
      },err=>{

      })
    }    
  }

}
