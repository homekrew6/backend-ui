import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuestionService   } from '../../../services/question.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  dataObject = [
    {
      key: "name",
      label: "Name",
      value: "Juri",
      type: "text",
      validation: {required: true}
    },
    {
      key: "age",
      label: "Age",
      value: "34",
      type: "text",
      validation: {required: true}
    }
  ];
  rForm: FormGroup; 
  rModalForm: FormGroup;  
  //objectProps;
  error: string;
  typeSelected = '';
  typeModalSelected = '';
  radioOptionSelected = 0;
  radioModalOptionSelected = 0;
  serviceList = [];
  subQuestions = [];
  questionTypeList=[{id:1,name:"Number"},{id:2,name:"Boolean"},{id:3,name:"Radio"},{id:4,name:"Range"},{id:5,name:"Photo"}];
  radioOptionList=[{value:2},{value:3},{value:4},{value:5}];
  
  constructor(private fb: FormBuilder ,private router: Router, private questionService: QuestionService) { 
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
      'serviceId':''
      
    });
  }

  ngOnInit() {  
    this.rForm.controls['type'].setValue('');
    this.rForm.controls['serviceId'].setValue('');
    this.getAllService();   
    
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
      this.rForm.controls['no_of_option'].setValue('');
      this.rForm.controls['option1'].setValue('');
      this.rForm.controls['option2'].setValue('');
      this.rForm.controls['option3'].setValue('');
      this.rForm.controls['option4'].setValue('');
      this.rForm.controls['option5'].setValue('');
      
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
      this.rForm.controls['range_name'].setValue('');
      this.rForm.controls['start_range'].setValue('');
      this.rForm.controls['end_range'].setValue('');
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
      this.rForm.controls['no_of_option'].setValue('');
      this.rForm.controls['option1'].setValue('');
      this.rForm.controls['option2'].setValue('');
      this.rForm.controls['option3'].setValue('');
      this.rForm.controls['option4'].setValue('');
      this.rForm.controls['option5'].setValue('');
      this.rForm.controls['range_name'].setValue('');
      this.rForm.controls['start_range'].setValue('');
      this.rForm.controls['end_range'].setValue('');
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
  public addQuestion(question){
    console.log(question);

    
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
    this.questionService.addQuestion(questionObj).subscribe(res=>{
        if(this.subQuestions.length > 0){
          for (let i =0; i < this.subQuestions.length ; i++) {
            //this.rModalForm.get('option'+(i+1)).setValidators([Validators.required]);
             this.addSubQuestion(this.subQuestions[i],question.serviceId,res.id)

             if(i == (this.subQuestions.length - 1)){
              this.router.navigate(['/question']);
             }
          }
        }else{
          this.router.navigate(['/question']);
        }
      //this.router.navigate(['/question']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public addSubQuestion(question,serviceId,questionId){
    

    
    let questionObj = {
      name: question.name,
      type: question.type,
      serviceId: serviceId,
      parent_id:questionId,
      option:question.option
    }
     
    this.questionService.addQuestion(questionObj).subscribe(res=>{
      
      
    },err=>{
      
    })
  }

  public getAllService(){
    this.questionService.getAllService().subscribe(res=>{
      
      this.serviceList=res;
    })
    
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
    this.subQuestions.push(questionObj)
    largeModal.hide();
    console.log(this.subQuestions);    
    
  }
  public deleteModalQuestion(deletedId){
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){  
      this.subQuestions.splice(deletedId, 1);
    }    
  }

}
