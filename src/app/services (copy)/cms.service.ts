import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CmsService {
    constructor( private http: Http ){ 

    }
    
    public getCms(){
        return this.http.get(environment.baseurl+'CMs?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addCms(data){
        return this.http.post(environment.baseurl+'CMs?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteCms(id){
        return this.http.delete(environment.baseurl+'CMs/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualCms(id){
        return this.http.get(environment.baseurl+'CMs/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editCms(data,id){
        return this.http.put(environment.baseurl+'CMs/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
}