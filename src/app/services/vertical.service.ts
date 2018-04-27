import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class VerticalService {
    constructor( private http: Http ){ 

    }
    
    public getVertical(){
        return this.http.get(environment.baseurl+'Verticals?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addVertical(data){
        return this.http.post(environment.baseurl+'Verticals?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteVertical(id){
        return this.http.delete(environment.baseurl+'Verticals/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualVertical(id){
        return this.http.get(environment.baseurl+'Verticals/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editVertical(data,id){
        return this.http.put(environment.baseurl+'Verticals/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
}