import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class RoleService {
    constructor(private http: Http) {

    }

    public getRoleTypes() {
        return this.http.get(environment.baseurl + 'roleTypes?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public addRoleTypes(data) {
        return this.http.post(environment.baseurl + 'roleTypes?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public deleteRoleTypes(id) {
        return this.http.delete(environment.baseurl + 'roleTypes/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualRoleTypes(id) {
        return this.http.get(environment.baseurl + 'roleTypes/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public editRoleTypes(data, id) {
        return this.http.put(environment.baseurl + 'roleTypes/' + id + '?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {

            return res.json();
        });
    }
}