import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguageService {
    constructor( private http: Http ){ 

    }

    public getLanguages(){
        return this.http.get(environment.baseurl+'Languages?access_token='+localStorage
        .getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
    public addLanguage(data){
        return this.http.post(environment.baseurl+'Languages?access_token='+localStorage
        .getItem('authToken'), data).map((res: Response) => {
            return res.json();
        });
    }
    public deleteLanguage(id){
        return this.http.delete(environment.baseurl + 'Languages/'+id+'/?access_token='+localStorage.getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualLanguage(id){
        return this.http.get(environment.baseurl+'Languages/'+id+'/?access_token='+localStorage.getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
    public editLanguage(data, id){
        return this.http.put(environment.baseurl + 'Languages/'+ id+'?access_token='+localStorage.getItem('authToken'),data).map((res: Response) => {

            return res.json();
        });
    }
}