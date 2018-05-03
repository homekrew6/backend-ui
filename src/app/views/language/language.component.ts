import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languageList=[];
  constructor(private router: Router, private languageService: LanguageService) { }

  ngOnInit() {
    this.getAllLanguages();
  }

  public getAllLanguages(){
    this.languageService.getLanguages().subscribe(res=>{
      //console.log(res);
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.languageList = filteredItems;
      console.log(this.languageList);
    })
  }
  public deleteLanguage(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.languageService.deleteLanguage(id).subscribe(res=>{
        this.getAllLanguages();
      },err=>{

      })
    }
  }

}
