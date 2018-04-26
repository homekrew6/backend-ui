import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class FaqService {
    constructor( private http: Http ){ 

    }
    
    public getFaq(){
        return this.http.get(environment.baseurl+'Faqs?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addFaq(data){
        return this.http.post(environment.baseurl+'Faqs?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteFaq(id){
        return this.http.delete(environment.baseurl+'Faqs/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualFaq(id){
        return this.http.get(environment.baseurl+'Faqs/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editFaq(data,id){
        return this.http.put(environment.baseurl+'Faqs/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
}