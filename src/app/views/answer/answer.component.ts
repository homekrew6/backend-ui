import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answerList=[];
  questionName=''
  questionId : any
  constructor(private router: Router,private activatedRoute:ActivatedRoute, private answerService: AnswerService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.questionId = params['questionId'];        
        this.getQuestionRelatedAnswer(this.questionId);
    });
    
  }

  public getQuestionRelatedAnswer(questionId){
    //console.log(this.questionId);
    this.answerService.getIndividualQuestion(this.questionId).subscribe(res=>{
      //console.log(res);
      this.questionName = res.name
      this.answerList=res.answers;
      //console.log(this.answerList);
      //console.log(this.questionName);
    })
  }

  public deleteAnswer(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.answerService.deleteAnswer(id).subscribe(res=>{
        this.getQuestionRelatedAnswer(this.questionId);
      },err=>{

      })
    }
  }

}
