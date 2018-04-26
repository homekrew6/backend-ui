import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {
    constructor( private http: Http ){ 

    }

    public getJobList(){
        return this.http.get(environment.baseurl+'Jobs/getJobListingForAdmin?access_token'+localStorage
        .getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }

    public getAvailableWorkerList(data) {
        return this.http.post(environment.baseurl + 'Jobs/getAvailableWorkersForAdmin?access_token=' + localStorage
            .getItem('authToken'), data).map((res: Response) => {
                return res.json();
            });
    }


    public assignJob(data) {
        return this.http.post(environment.baseurl + 'Jobs/assignJobManually?access_token=' + localStorage
            .getItem('authToken'), data).map((res: Response) => {
                return res.json();
            });
    }


    public deleteJob(id){
        return this.http.delete(environment.baseurl + 'Jobs/'+id+'/?access_token='+localStorage.getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
   
}
