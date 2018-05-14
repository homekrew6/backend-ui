import { Headers } from '@angular/http';

const setHttpHeaders = () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  const token = localStorage.getItem('authToken');
  if (token) {
    myHeaders.append('Authorization', token);
  }
  return myHeaders;
};

export const environment = {
  production: true,
  baseurl: 'http://18.130.45.57:3000/api/', 
  headers: setHttpHeaders
};

export const absEnvironment = {
 
  absuluteUrl : 'assets/tinymce/skins/lightgray' 
};