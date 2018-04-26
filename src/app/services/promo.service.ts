import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PromoService {
    constructor(private http: Http) {

    }

    public getPromo() {
        return this.http.get(environment.baseurl + 'promotions?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }

    public getAllCustomersList() {
        return this.http.get(environment.baseurl + 'Customers?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }

    public getAllServicesList() {
        return this.http.get(environment.baseurl + 'services?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public addPromo(data) {
        return this.http.post(environment.baseurl + 'promotions/addPromoCode?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }

    getSelectedServiceForPromo(id)
    {
        const filter = '{"where":{"promotionsId":' + id + '}, "include":["service"]}';
        return this.http.get(environment.baseurl + 'promotionsServices?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }

    getSelectedCustomer(id) {
        const filter = '{"where":{"promotionsId":'+id+'}, "include":["customer"]}';
        return this.http.get(environment.baseurl + 'promotionsCustomers?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public deletePromo(id) {
        return this.http.delete(environment.baseurl + 'promotions/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualPromo(id) {
        return this.http.get(environment.baseurl + 'promotions/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public editPromo(data) {
        return this.http.post(environment.baseurl + 'promotions/editPromocode?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }

    public checkIfThePriorityIsValid(data)
    {
        return this.http.post(environment.baseurl + 'promotions/checkIfThePriorityIsValid?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
}