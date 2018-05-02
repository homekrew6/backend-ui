import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkerService {
    constructor( private http: Http ){ 

    }
    
    public getWorker(){
        return this.http.get(environment.baseurl+'Workers?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }


    public getWorkerSkillsById(id) {
        const filter ='{"where":{"workerId":'+id+'}, "include":["service"]}';
        return this.http.get(environment.baseurl + 'WorkerSkills?filter='+filter+'&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }


    public getJobListingById(id) {
        const filter = '{"where":{"workerId":' + id +'}, "include":["service", "zone", "userLocation", "currency", "customer", "worker"]}';
        return this.http.get(environment.baseurl + 'Jobs?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public addWorker(data){
        return this.http.post(environment.baseurl+'Workers?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteWorker(id){
        return this.http.delete(environment.baseurl+'Workers/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualWorker(id){
        return this.http.get(environment.baseurl+'Workers/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editWorker(data,id){
        return this.http.put(environment.baseurl+'Workers/editWorker/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
}