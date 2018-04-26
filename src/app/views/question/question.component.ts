import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionList=[];
  constructor(private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.getAllQuestion();
  }

  public getAllQuestion(){
    this.questionService.getQuestion().subscribe(res=>{
      console.log(res);
      this.questionList=res;
    })
  }
  public deleteQuestion(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.questionService.deleteQuestion(id).subscribe(res=>{
        this.getAllQuestion();
      },err=>{

      })
    }
  }

}
