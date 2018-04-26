import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FaqService } from '../../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  constructor(private router: Router, private faqService: FaqService) { }
  
  faqList=[];
  settings = {
    columns: {
      title: {
        title: 'Title',
      },
      question: {
        title: 'Question',
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
        },
      ],
    },
    attr: {
      class: 'table table-bordered'
    },
  };

  onCustom(event) {
    if (event.action == "delete") {
      this.deleteFaq(event.data.id);
    }
    else if (event.action == "edit") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.router.navigateByUrl('/faq/edit/' + event.data.id)
    }
  }

  ngOnInit() {
    this.getAllFaqs();
  }

  public getAllFaqs(){
    this.faqService.getFaq().subscribe(res=>{
      // console.log(res);
      this.faqList=res;
    })
  }
  public deleteFaq(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.faqService.deleteFaq(id).subscribe(res=>{
        this.getAllFaqs();
      },err=>{

      })
    }
  }

}
