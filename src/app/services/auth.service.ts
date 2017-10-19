import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {  } from "angularfire2/";

@Injectable()
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') || null;
    if (!token) {
      return false;
    }
    return true;
  }

}
