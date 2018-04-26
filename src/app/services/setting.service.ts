import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingService {
    constructor( private http: Http ) {

    }

    
    public getSetting(){
        return this.http.get(environment.baseurl + 'Settings/1?access_token='+localStorage
        .getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
    public editSetting(data){
        return this.http.put(environment.baseurl + 'Settings/1?access_token=' + localStorage
        .getItem('authToken'), data).map((res: Response) => {

            return res.json();
        });
    }
}