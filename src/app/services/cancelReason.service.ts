import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CancelReasonService {
    constructor(private http: Http) {

    }

    public getCancelReason() {
        return this.http.get(environment.baseurl + 'cancelReasons?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public addCancelReason(data) {
        return this.http.post(environment.baseurl + 'cancelReasons?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public deleteCancelReason(id) {
        return this.http.delete(environment.baseurl + 'cancelReasons/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualCancelReason(id) {
        return this.http.get(environment.baseurl + 'cancelReasons/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public editCancelReason(data, id) {
        return this.http.put(environment.baseurl + 'cancelReasons/' + id + '?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {

            return res.json();
        });
    }
}