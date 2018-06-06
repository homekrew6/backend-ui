import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkerService {
    constructor(private http: Http) {

    }

    public getWorker() {
        return this.http.get(environment.baseurl + 'Workers?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }

    public getZoneList() {
        return this.http.get(environment.baseurl + 'Zones?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getSkillsList() {
        return this.http.get(environment.baseurl + 'services?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }

    public saveWorkerSkills(data) {
        return this.http.post(environment.baseurl + 'WorkerSkills/insertWorkerSkill?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }


    public workerReset(data) {
        return this.http.post(environment.baseurl + 'Workers/reset?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public sendEmail(data) {
        return this.http.post(environment.baseurl + 'Customers/sendEmailForPasswordChange?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public deleteAdminTemp(id) {
        return this.http.delete(environment.baseurl + 'AdminTemps/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public workerResetPassword(data) {
        return this.http.post(environment.baseurl + 'Workers/reset-password?access_token=' + data.token, data).map((res: Response) => {
            return res.json();
        });
    }


    public getAdminTempByEmail(email) {
        const filter = '{"where":{"email":"' + email.email + '"}}';
        return this.http.get(environment.baseurl + 'AdminTemps?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }


    addWorkerTiming(data)
    {
        return this.http.post(environment.baseurl + 'Workeravailabletimings?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        }); 
    }


    editWorkerTiming(data) {
        return this.http.put(environment.baseurl + 'Workeravailabletimings/'+data.id+'?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }




    public saveWorkerZone(data) {
        return this.http.post(environment.baseurl + 'Workerlocations/insertWorkerLocation?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public getWorkerZoneById(id) {
        const filter = '{"where":{"workerId":' + id + '}, "include":["zone"]}';
        return this.http.get(environment.baseurl + 'WorkerLocations?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }


    public getAvailableTimingList(id)
    {
        const filter = '{"where":{"workerId":' + id + '}}';
        return this.http.get(environment.baseurl + 'Workeravailabletimings?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getWorkerSkillsById(id) {
        const filter = '{"where":{"workerId":' + id + '}, "include":["service"]}';
        return this.http.get(environment.baseurl + 'WorkerSkills?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }


    public getJobListingById(id) {
        const filter = '{"where":{"workerId":' + id + '}, "include":["service", "zone", "userLocation", "currency", "customer", "worker"]}';
        return this.http.get(environment.baseurl + 'Jobs?filter=' + filter + '&access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public addWorker(data) {
        return this.http.post(environment.baseurl + 'Workers?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public deleteWorker(id) {
        return this.http.delete(environment.baseurl + 'Workers/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualWorker(id) {
        return this.http.get(environment.baseurl + 'Workers/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public editWorker(data, id) {
        return this.http.put(environment.baseurl + 'Workers/editWorker/' + id + '?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {

            return res.json();
        });
    }
}