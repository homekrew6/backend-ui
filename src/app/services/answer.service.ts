import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AnswerService {
    constructor( private http: Http ){ 

    }
    
    public getQuestion(){        
        //let questionService = '{"include":["service","questions"]}';
        return this.http.get(environment.baseurl+'Questions/getQuestions?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json().question;
        });
    }
    public addQuestion(data){
        return this.http.post(environment.baseurl+'Questions?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    
    public deleteQuestion(id){
        return this.http.delete(environment.baseurl+'Questions/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
   
    public getIndividualQuestion(id){
        let questionService = '{"include":["service","questions"]}';
        return this.http.get(environment.baseurl+'Questions/'+id+'?filter='+questionService+'&access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editQuestion(data,id){
        return this.http.put(environment.baseurl+'Questions/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }    
    public getAllService(){
        return this.http.get(environment.baseurl+'services?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getChildQuestion(id){
        return this.http.get(environment.baseurl+'Questions/'+id+'/questions?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
}