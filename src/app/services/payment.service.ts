import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {
    constructor(private http: Http) {

    }

    public getPayment() {
        const filter ='{"include":["customer"]}';
        return this.http.get(environment.baseurl + 'payments?filter='+filter+'&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public addPayment(data) {
        return this.http.post(environment.baseurl + 'payments?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public deletePayment(id) {
        return this.http.delete(environment.baseurl + 'payments/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualPayment(id) {
        return this.http.get(environment.baseurl + 'payments/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public editPayment(data, id) {
        return this.http.put(environment.baseurl + 'payments/' + id + '?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {

            return res.json();
        });
    }
}