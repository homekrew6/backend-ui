import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuestionService   } from '../../../services/question.service';
import { ServiceService } from '../../../services/service.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { AnswerService } from '../../../services/answer.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  dataObject = [
    {
      key: 'name',
      label: 'Name',
      value: 'Juri',
      type: 'text',
      validation: {required: true}
    },
    {
      key: 'age',
      label: 'Age',
      value: '34',
      type: 'text',
      validation: {required: true}
    }
  ];
  rForm: FormGroup; 
  rModalForm: FormGroup;  
  // objectProps;
  error: string;
  typeSelected = '';
  typeModalSelected = '';
  radioOptionSelected = 0;
  radioModalOptionSelected = 0;
  serviceList = [];
  subQuestions = [];
  currencyList=[];
  optionList=[{value:'Addition'},{value:'Multiple'}];
  is_active = true;
  is_disable = false;
  modal_is_active = true;
  questionTypeList= [{id: 1, name: 'Number'}, {id: 2, name: 'Boolean'}, {id: 3, name: 'Radio'}, {id: 4, name: 'Range'}, {id: 5, name: 'Photo'}];
  radioOptionList= [{value: 2}, {value: 3}, {value: 4}, {value: 5}];
  
  constructor(private fb: FormBuilder , private router: Router, private questionService: QuestionService, private serviceService: ServiceService,private answerService: AnswerService) { 
    this.rForm = fb.group({      
      'type': [null, Validators.required],
      'name': [null, Validators.required],
      'range_name': '',
      'start_range': ['',Validators.max(1)],
      'end_range': '',
      'no_of_option': '',
      'option_list': [],
      'option1': '',
      'option2': '',
      'option3': '',
      'option4': '',
      'option5': '',
      'serviceId': [null, Validators.required],
      'icon': '',
      'color': '',
      'image': '',
      'is_active': '',
      'file': [],
      'option_price_impact':'',
      'price_impact':'',
      'option_time_impact':'',
      'time_impact':'',
      'currencyId':''
      
    });
    this.rModalForm = fb.group({      
      'type': [null, Validators.required],
      'name': [null, Validators.required],
      'range_name': '',
      'start_range': '',
      'end_range': '',
      'no_of_option': '',
      'option_list': [],
      'option1': '',
      'option2': '',
      'option3': '',
      'option4': '',
      'option5': '',
      'serviceId': '',
      'icon': '',
      'color': '',
      'image': '',
      'is_active': '',
      'file': []
    });
  }

  ngOnInit() {  
    this.rForm.controls['type'].setValue('');
    this.rForm.controls['serviceId'].setValue('');
    this.getAllService();   
    this.getAllCurrencies();
    
  }

  public getAllCurrencies(){
    this.answerService.getAllCurrencies().subscribe(res=>{      
      this.currencyList=res;
    })
  }

  public changeQuestionType(questionType){
    //console.log(questionType)
    this.typeSelected = questionType;
    // console.log(questionType);
    //this.radioOptionSelected = 0;
    if(questionType==='1' || questionType==='2' || questionType==='4' )
    {
      this.rForm.get('option_price_impact').setValidators([Validators.required]);
      this.rForm.get('price_impact').setValidators([Validators.required]);
      this.rForm.get('option_time_impact').setValidators([Validators.required]);
      this.rForm.get('time_impact').setValidators([Validators.required]);
      this.rForm.get('currencyId').setValidators([Validators.required]);
    }
    if (questionType === '4'){
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
    }else{      
      this.rForm.get('range_name').setValidators([]);
      this.rForm.get('start_range').setValidators([]);
      this.rForm.get('end_range').setValidators([]);
      this.rForm.controls['range_name'].setValue('');
      this.rForm.controls['start_range'].setValue('');
      this.rForm.controls['end_range'].setValue('');
    }
    // else if (questionType == 3){
    //   this.rForm.get('range_name').setValidators([]);
    //   this.rForm.get('start_range').setValidators([]);
    //   this.rForm.get('end_range').setValidators([]);
    //   this.rForm.get('option1').setValidators([]);
    //   this.rForm.get('option2').setValidators([]);
    //   this.rForm.get('option3').setValidators([]);
    //   this.rForm.get('option4').setValidators([]);
    //   this.rForm.get('option5').setValidators([]);
    //   this.rForm.controls['range_name'].setValue('');
    //   this.rForm.controls['start_range'].setValue('');
    //   this.rForm.controls['end_range'].setValue('');
    //   this.rForm.get('no_of_option').setValidators([Validators.required]);
    // }else{
      
    //   this.rForm.get('range_name').setValidators([]);
    //   this.rForm.get('start_range').setValidators([]);
    //   this.rForm.get('end_range').setValidators([]);
    //   this.rForm.get('no_of_option').setValidators([]);
    //   this.rForm.get('option1').setValidators([]);
    //   this.rForm.get('option2').setValidators([]);
    //   this.rForm.get('option3').setValidators([]);
    //   this.rForm.get('option4').setValidators([]);
    //   this.rForm.get('option5').setValidators([]);
    //   this.rForm.controls['no_of_option'].setValue('');
    //   this.rForm.controls['option1'].setValue('');
    //   this.rForm.controls['option2'].setValue('');
    //   this.rForm.controls['option3'].setValue('');
    //   this.rForm.controls['option4'].setValue('');
    //   this.rForm.controls['option5'].setValue('');
    //   this.rForm.controls['range_name'].setValue('');
    //   this.rForm.controls['start_range'].setValue('');
    //   this.rForm.controls['end_range'].setValue('');
    // }

  }
  public changeRadioOption(optionType){
    this.radioOptionSelected = optionType;
    this.rForm.get('option1').setValidators([]);
    this.rForm.get('option2').setValidators([]);
    this.rForm.get('option3').setValidators([]);
    this.rForm.get('option4').setValidators([]);
    this.rForm.get('option5').setValidators([]);
    for (let i = 0; i < optionType ; i++) {
      this.rForm.get('option' + (i + 1)).setValidators([Validators.required]);
    }

  }
  public addQuestion(question){
    console.log(question);
    
    let questionObj = {
      name: question.name,
      type: question.type,
      serviceId: question.serviceId,
      parent_id: 0,
      icon: question.icon,
      color: question.color,
      image: question.image,
      option: [],
      is_active: this.is_active,
      range_name: '',
      start_range: '',
      end_range: '',
      option_price_impact:'',
      price_impact:'',
      option_time_impact:'',
      time_impact:'',
      currencyId:'',
      IncrementId:1,
      Status:1,
      selectedRadio:'',
      rangeValue:'',
      sliderValues:'',
      isSlided:0
    }
    if (question.type === '4'){
      questionObj.range_name = question.range_name;
      questionObj.start_range =  question.start_range;
      questionObj.end_range =  question.end_range;
    }
    if(question.type==='1' || question.type==='2' || question.type==='4')
    {
      questionObj.option_price_impact = question.option_price_impact;
      questionObj.price_impact =  question.price_impact;
      questionObj.option_time_impact =  question.option_time_impact;
      questionObj.time_impact=question.time_impact;
      questionObj.currencyId =  question.currencyId;
    }
    // if (question.type == 3){
    //   if (question.option1 != ''){
    //     questionObj.option.push({option: question.option1})
    //   }
    //   if (question.option2 != ''){
    //     questionObj.option.push({option: question.option2})
    //   }
    //   if (question.option3 != ''){
    //     questionObj.option.push({option: question.option3})
    //   }
    //   if (question.option4 != ''){
    //     questionObj.option.push({option: question.option4})
    //   }
    //   if (question.option5 != ''){
    //     questionObj.option.push({option: question.option5})
    //   }
      
    // }else if (question.type == 4){
    //   questionObj.option.push({range_name: question.range_name})
    //   questionObj.option.push({start_range: question.start_range})
    //   questionObj.option.push({end_range: question.end_range})
    // }else{
    //   questionObj.option = [];
    // }   
    questionObj.option = [];
    this.is_disable = true;
    if(question.file){
      this.serviceService.addServiceWithFile(question.file).subscribe(res=>{
            console.log(res);
            if(res){
              //console.log(res);
              if(res.type == 'success'){
                questionObj.image = res.url;
                this.saveQuestionOnly(question,questionObj);
              }
              
            }else{
              this.is_disable = false;
              this.error = "Error Occured, please try again"
            }
            

      
      },err=>{
        this.is_disable = false;
        this.error = "Error Occured, please try again"
      })
    }else{
      questionObj.image = '';
      this.saveQuestionOnly(question,questionObj);
    }
    
    
    
  }

  goToList() {
    this.router.navigate(['question']);
  }
  public saveQuestionOnly(question,questionObj){
    this.questionService.addQuestion(questionObj).subscribe(res => {
      if (this.subQuestions.length > 0){
        for (let i = 0; i < this.subQuestions.length ; i++) {
          // this.rModalForm.get('option'+(i+1)).setValidators([Validators.required]);
           this.addSubQuestion(this.subQuestions[i], question.serviceId, res.id)

           if (i == (this.subQuestions.length - 1)){
            this.router.navigate(['/question']);
           }
        }
      }else{
        this.is_disable = false;
        this.router.navigate(['/question']);
      }
    // this.router.navigate(['/question']);
  }, err => {
    this.is_disable = false;
    this.error = 'Error Occured, please try again'
  })
  }

  public addSubQuestion(question, serviceId, questionId){
    

    
    let questionObj = {
      name: question.name,
      type: question.type,
      serviceId: serviceId,
      parent_id: questionId,
      icon: question.icon,
      color: question.color,
      image: question.image,
      option: question.option,
      is_active: question.is_active,
      range_name: '',
      start_range: '',
      end_range: '',
    }
    if (question.type == 4){
      questionObj.range_name = question.range_name;
      questionObj.start_range =  question.start_range;
      questionObj.end_range =  question.end_range;
    }
    questionObj.option = [];
    
    if(question.file){
      this.serviceService.addServiceWithFile(question.file).subscribe(res=>{
            console.log(res);
            if(res){
              //console.log(res);
              if(res.type == 'success'){
                questionObj.image = res.url;
                this.saveSubQuestionOnly(question,questionObj);
              }
              
            }else{
              
              this.error = "Error Occured, please try again"
            }
            

      
      },err=>{
        
        this.error = "Error Occured, please try again"
      })
    }else{
      questionObj.image = '';
      this.saveSubQuestionOnly(question,questionObj);
    }
     
    
  }
  public saveSubQuestionOnly(question,questionObj){
    this.questionService.addQuestion(questionObj).subscribe(res => {
      
      
    }, err => {
      
    })
  }

  public getAllService(){
    this.questionService.getAllService().subscribe(res => {
      
      this.serviceList = res;
    })
    
  }

  public showPopupQuestion(largeModal){
    
    this.typeModalSelected = '';
    this.radioModalOptionSelected = 0;
    this.rModalForm.controls['type'].setValue('');
    // this.rModalForm.controls['serviceId'].setValue('');
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
    this.rModalForm.controls['file'].setValue('');
    this.modal_is_active = true;
    largeModal.show();    
  }

  public changeModalQuestionType(questionType){
    console.log(questionType)
    this.typeModalSelected = questionType;
    
    //this.radioModalOptionSelected = 0;
    if (questionType == 4){
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
    }else{
      this.rModalForm.get('range_name').setValidators([]);
      this.rModalForm.get('start_range').setValidators([]);
      this.rModalForm.get('end_range').setValidators([]);
      this.rModalForm.controls['range_name'].setValue('');
      this.rModalForm.controls['start_range'].setValue('');
      this.rModalForm.controls['end_range'].setValue('');
    }
    // else if (questionType == 3){
    //   this.rModalForm.get('range_name').setValidators([]);
    //   this.rModalForm.get('start_range').setValidators([]);
    //   this.rModalForm.get('end_range').setValidators([]);
    //   this.rModalForm.get('option1').setValidators([]);
    //   this.rModalForm.get('option2').setValidators([]);
    //   this.rModalForm.get('option3').setValidators([]);
    //   this.rModalForm.get('option4').setValidators([]);
    //   this.rModalForm.get('option5').setValidators([]);
    //   this.rModalForm.controls['range_name'].setValue('');
    //   this.rModalForm.controls['start_range'].setValue('');
    //   this.rModalForm.controls['end_range'].setValue('');
    //   this.rModalForm.get('no_of_option').setValidators([Validators.required]);
    // }else{
      
    //   this.rModalForm.get('range_name').setValidators([]);
    //   this.rModalForm.get('start_range').setValidators([]);
    //   this.rModalForm.get('end_range').setValidators([]);
    //   this.rModalForm.get('no_of_option').setValidators([]);
    //   this.rModalForm.get('option1').setValidators([]);
    //   this.rModalForm.get('option2').setValidators([]);
    //   this.rModalForm.get('option3').setValidators([]);
    //   this.rModalForm.get('option4').setValidators([]);
    //   this.rModalForm.get('option5').setValidators([]);
    //   this.rModalForm.controls['no_of_option'].setValue('');
    //   this.rModalForm.controls['option1'].setValue('');
    //   this.rModalForm.controls['option2'].setValue('');
    //   this.rModalForm.controls['option3'].setValue('');
    //   this.rModalForm.controls['option4'].setValue('');
    //   this.rModalForm.controls['option5'].setValue('');
    //   this.rModalForm.controls['range_name'].setValue('');
    //   this.rModalForm.controls['start_range'].setValue('');
    //   this.rModalForm.controls['end_range'].setValue('');
    // }

  }
  public changeModalRadioOption(optionType){
    this.radioModalOptionSelected = optionType;
    this.rModalForm.get('option1').setValidators([]);
    this.rModalForm.get('option2').setValidators([]);
    this.rModalForm.get('option3').setValidators([]);
    this.rModalForm.get('option4').setValidators([]);
    this.rModalForm.get('option5').setValidators([]);
    for (let i = 0; i < optionType ; i++) {
      this.rModalForm.get('option' + (i + 1)).setValidators([Validators.required]);
    }

  }

  public addModalQuestion(question, largeModal){
    
    let questionObj = {
      name: question.name,
      type: question.type,
      serviceId: question.serviceId,
      icon: question.icon,
      color: question.color,
      image: question.image,
      file: question.file,
      parent_id: 0,
      option: [],
      is_active: this.modal_is_active,
      range_name: '',
      start_range: '',
      end_range: '',
    }
    if (question.type == 4){
      questionObj.range_name = question.range_name;
      questionObj.start_range =  question.start_range;
      questionObj.end_range =  question.end_range;
    }
    // if (question.type == 3){
    //   if (question.option1 != ''){
    //     questionObj.option.push({option: question.option1})
    //   }
    //   if (question.option2 != ''){
    //     questionObj.option.push({option: question.option2})
    //   }
    //   if (question.option3 != ''){
    //     questionObj.option.push({option: question.option3})
    //   }
    //   if (question.option4 != ''){
    //     questionObj.option.push({option: question.option4})
    //   }
    //   if (question.option5 != ''){
    //     questionObj.option.push({option: question.option5})
    //   }
      
    // }else if (question.type == 4){
    //   questionObj.option.push({range_name: question.range_name})
    //   questionObj.option.push({start_range: question.start_range})
    //   questionObj.option.push({end_range: question.end_range})
    // }else{
    //   questionObj.option = [];
    // }
    questionObj.option = [];
    this.subQuestions.push(questionObj)
    largeModal.hide();
    console.log(this.subQuestions);    
    
  }
  public deleteModalQuestion(deletedId){
    let confirmMessage = confirm('Do you want to delete?')
    if (confirmMessage){  
      this.subQuestions.splice(deletedId, 1);
    }    
  }
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    // console.log(this.is_active);
  }
  public changeModalIsActive($e: any){
    this.modal_is_active = !this.modal_is_active;
    // console.log(this.is_active);
  }

  public fileChangeListener($event) {
    console.log($event);
    
    const image: any = new Image();
    let file: File = $event.target.files[0];   
    
    
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
     
      
    };   
        const fd = new FormData();
        fd.append('file', file);        
      this.rForm.controls['file'].setValue(fd);
    
    myReader.readAsDataURL(file);
    
  }

  public fileChangeListenerModal($event) {
    console.log($event);
    
    const image: any = new Image();
    let file: File = $event.target.files[0];   
    
    
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
     
      
    };   
        const fd = new FormData();
        fd.append('file', file);        
      this.rModalForm.controls['file'].setValue(fd);
    
    myReader.readAsDataURL(file);
    
  }

}
