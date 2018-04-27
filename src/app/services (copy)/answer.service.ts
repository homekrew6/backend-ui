import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AnswerService {
    constructor(private http: Http) {

    }

    public getAnswer() {
        // let questionService = '{"include":["service","questions"]}';
        return this.http.get(environment.baseurl + 'Answers?access_token=' + localStorage
            .getItem('authToken')).map((res: Response) => {
                return res.json().question;
            });
    }
    public addAnswer(data) {
        return this.http.post(environment.baseurl + 'Answers?access_token=' + localStorage
        .getItem('authToken'), data).map((res: Response) => {
            return res.json();
        });
    }

    public deleteAnswer(id) {
        return this.http.delete(environment.baseurl + 'Answers/' + id + '/?access_token=' + localStorage
        .getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }

    public getIndividualQuestion(id) {
        const questionService = '{"include":["answers"]}';
        return this.http.get(environment.baseurl + 'Questions/' + id + '?filter=' + questionService + '&access_token=' + localStorage
        .getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
    public getIndividualAnswer(id) {
        return this.http.get(environment.baseurl + 'Answers/' + id + '?access_token=' + localStorage
        .getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
    public editAnswer(data, id) {
        return this.http.put(environment.baseurl + 'Answers/' + id + '?access_token=' + localStorage
        .getItem('authToken'), data).map((res: Response) => {

            return res.json();
        });
    }
    public getAllCurrencies() {
        return this.http.get(environment.baseurl + 'Currencies?access_token=' + localStorage.getItem('authToken')).map((res: Response) => {
            return res.json();
        });
    }
}
