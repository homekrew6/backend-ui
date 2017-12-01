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
        let serviceChild = '{"include":["vertical"]}';
        return this.http.get(environment.baseurl+'services?filter='+serviceChild+'&access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addService(data){
        return this.http.post(environment.baseurl+'services?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public addServiceWithFile(data){
        return this.http.post(environment.baseurl+'services/uploadFile?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {  
            console.log(res);          
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
    public deleteServiceRelatedZone(id){
        return this.http.delete(environment.baseurl+'services/'+id+'/serviceZones?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualService(id){
        let serviceChild = '{"include":["serviceZones","vertical"]}';
        return this.http.get(environment.baseurl+'services/'+id+'/?filter='+serviceChild+'&access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
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
    public getAllExexutionMethod(){
        return this.http.get(environment.baseurl+'ExexutionMethods?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getAllCurrencies(){
        return this.http.get(environment.baseurl+'Currencies?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getAllZone(){
        let zoneParent = '{"include":["zone"]}';
        return this.http.get(environment.baseurl+'Zones?filter='+zoneParent+'&access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
}