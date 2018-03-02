import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SliderService {
    constructor( private http: Http ){ 

    }
    
    public getSlider(){
        return this.http.get(environment.baseurl+'IntroSliders?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addSlider(data){
        return this.http.post(environment.baseurl+'IntroSliders?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteSlider(id){
        return this.http.delete(environment.baseurl+'IntroSliders/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public getIndividualSlider(id){
        return this.http.get(environment.baseurl+'IntroSliders/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editSlider(data,id){
        return this.http.put(environment.baseurl+'IntroSliders/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }
}