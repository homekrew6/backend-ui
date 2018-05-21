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
  settings = {
    columns: {
      name: {
        title: 'Question',
      },
      type: {
        title: 'Type',
        valuePrepareFunction: (cell, row) => {
          if(row.type)
          {
            if (row.type == 1) {
              return 'Number'
            } else if (row.type == 2) {
              return 'Boolean'
            } else if (row.type == 3) {
              return 'Radio'
            } else if (row.type == 4) {
              return 'Range'
            } else if (row.type == 5) {
              return 'Photo'
            }
          }
        
        }
      },
      'service.name': {
        title: 'Service',
        valuePrepareFunction: (cell, row) => {
          return row.service?row.service.name:'';
        }
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'edit',
          title: '<i class="fa fa-pencil"></i>',
        },
        {
          name: 'delete',
          title: '<i class="fa fa-trash" ></i>',
        }
      ],
    },
    attr: {
      class: 'table table-bordered'
    },


  };
  constructor(private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.getAllQuestion();
  }
  
  onCustom(event) {

    if (event.action == "delete") {
      this.deleteQuestion(event.data.id);
    }

    else if (event.action == "edit") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.router.navigateByUrl('/question/edit/' + event.data.id)
    }

  }

  public getAllQuestion(){
    this.questionService.getQuestion().subscribe(res=>{
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.questionList = filteredItems;
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
