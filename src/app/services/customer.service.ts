import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
    constructor( private http: Http ){ 

    }
    public workerReset(data) {
        return this.http.post(environment.baseurl + 'Customers/reset?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }




    public getAdminTempByEmail(email) {
        // debugger;
        // const filter = '{"where":{"email":' + email.email + '}}';
        // return this.http.get(environment.baseurl + 'AdminTemps?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
        //     return res.json();
        // });
        const filter = '{"where":{"email":"'+email.email+'"}}';
        return this.http.get(environment.baseurl + 'AdminTemps?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getCustomer(){
        return this.http.get(environment.baseurl+'Customers?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public addCustomer(data){
        return this.http.post(environment.baseurl+'Customers?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {            
            return res.json();
        });
    }


    public customerResetPassword(data) {
        return this.http.post(environment.baseurl + 'Customers/reset-password?access_token=' + data.token, data).map((res: Response) => {
            return res.json();
        });
    }
    public deleteCustomer(id){
        return this.http.delete(environment.baseurl+'Customers/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public deleteAdminTemp(id) {
        return this.http.delete(environment.baseurl + 'AdminTemps/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualCustomer(id){
        return this.http.get(environment.baseurl+'Customers/'+id+'/?access_token='+localStorage.getItem("authToken")).map((res: Response) => {            
            return res.json();
        });
    }
    public editCustomer(data,id){
        return this.http.put(environment.baseurl+'Customers/editCustomer/'+id+'?access_token='+localStorage.getItem("authToken"),data).map((res: Response) => {       
           
            return res.json();
        });
    }

    public sendEmail(data)
    {
        return this.http.post(environment.baseurl + 'Customers/sendEmailForPasswordChange?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
}