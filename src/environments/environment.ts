// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDWM4ga7J2EeVRVDWMOfkDScRkxBCQTZcc',
    authDomain: 'clutch-app.firebaseapp.com',
    databaseURL: 'https://clutch-app.firebaseio.com',
    projectId: 'clutch-app',
    storageBucket: 'clutch-app.appspot.com',
    messagingSenderId: '80842292138'
  }
};
