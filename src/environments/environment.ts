// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
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
  production: false,
  baseurl: 'http://18.130.45.57:3000/api/',
  // baseurl: 'http://192.168.1.118:3000/api/',
  // baseurl: 'http://111.93.169.90:3000/api/',  
  headers: setHttpHeaders
};

export const absEnvironment = {   
  absuluteUrl : '/assets/tinymce/skins/lightgray',
  //absuluteUrl : '/team3/krew_admin/assets/tinymce/skins/lightgray',  
};
