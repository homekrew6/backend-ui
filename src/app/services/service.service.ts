import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {
    constructor( private http: Http ){ 

    }
    
    public getService(){
        return this.http.get(environment.baseurl+'services?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addService(data){
        return this.http.post(environment.baseurl+'services?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public addServiceZone(data){
        return this.http.post(environment.baseurl+'services/'+data.serviceId+'/serviceZones?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteService(id){
        return this.http.delete(environment.baseurl+'services/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualService(id){
        return this.http.get(environment.baseurl+'services/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editService(data,id){
        return this.http.put(environment.baseurl+'services/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
    public getAllVertical(){
        return this.http.get(environment.baseurl+'Verticals?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getAllZone(){
        return this.http.get(environment.baseurl+'Zones?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
}