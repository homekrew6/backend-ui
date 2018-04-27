import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ZoneService {
    constructor( private http: Http ){ 

    }
    
    public getZone(){
        let zoneParent = '{"include":["zone"]}';
        return this.http.get(environment.baseurl+'Zones?filter='+zoneParent+'&access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addZone(data){
        return this.http.post(environment.baseurl+'Zones?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteZone(id){
        return this.http.delete(environment.baseurl+'Zones/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualZone(id){
        return this.http.get(environment.baseurl+'Zones/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editZone(data,id){
        return this.http.put(environment.baseurl+'Zones/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
    public getAllLanguages(){
        return this.http.get(environment.baseurl+'Languages?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getAllCurrencies(){
        return this.http.get(environment.baseurl+'Currencies?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getAllParentZones(){
        return this.http.get(environment.baseurl+'Zones/getParentZone?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json().zone;
        });
    }

    public getAllZones() {
        return this.http.get(environment.baseurl + 'Zones?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
}