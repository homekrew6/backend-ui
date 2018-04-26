import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class MaterialService {
    constructor(private http: Http) {

    }

    public getMaterial() {
        return this.http.get(environment.baseurl + 'Materials?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public addMaterial(data) {
        return this.http.post(environment.baseurl + 'Materials?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {
            return res.json();
        });
    }
    public deleteMaterial(id) {
        return this.http.delete(environment.baseurl + 'Materials/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualMaterial(id) {
        return this.http.get(environment.baseurl + 'Materials/' + id + '/?access_token=' + localStorage.getItem("authToken")).map((res: Response) => {
            return res.json();
        });
    }
    public editMaterial(data, id) {
        return this.http.put(environment.baseurl + 'Materials/' + id + '?access_token=' + localStorage.getItem("authToken"), data).map((res: Response) => {

            return res.json();
        });
    }
}