import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {
    constructor( private http: Http ){ 

    }
    
    public getCurrency(){
        return this.http.get(environment.baseurl+'Currencies?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addCurrency(data){
        return this.http.post(environment.baseurl+'Currencies?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteCurrency(id){
        return this.http.delete(environment.baseurl+'Currencies/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualCurrency(id){
        return this.http.get(environment.baseurl+'Currencies/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editCurrency(data,id){
        return this.http.put(environment.baseurl+'Currencies/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
}