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
  faqList=[];
  constructor(private router: Router, private faqService: FaqService) { 

  }

  ngOnInit() {
    this.getAllFaqs();
  }

  public getAllFaqs(){
    this.faqService.getFaq().subscribe(res=>{
      //console.log(res);
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
