
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, CommonModule, PathLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'ngx-toaster/src';
import * as firebase from 'firebase';
// export const firebaseConfig = {
//   apiKey: "AIzaSyCnS3M8ZZBYRH4QubDH3OJPKSgk-03Nm9w",
//   authDomain: "krew-user-app.firebaseapp.com",
//   databaseURL: "https://krew-user-app.firebaseio.com",
//   projectId: "krew-user-app",
//   storageBucket: "krew-user-app.appspot.com",
//   messagingSenderId: "16831185707"
// };
export const firebaseConfig = {
  apiKey: "AIzaSyCRclijPdb65nW25fvZozVv0LekbC0GHRM",
  authDomain: "homekrew-91b4e.firebaseapp.com",
  databaseURL: "https://homekrew-91b4e.firebaseio.com",
  storageBucket: "homekrew-91b4e.appspot.com",
  messagingSenderId: "834042316676"
};
firebase.initializeApp(firebaseConfig);
//import { NguiMapModule} from '@ngui/map';

// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer
} from './components';

const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireModule } from 'angularfire2';

// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

// export const firebaseConfig = {
//   apiKey: "AIzaSyCnS3M8ZZBYRH4QubDH3OJPKSgk-03Nm9w",
//   authDomain: "krew-user-app.firebaseapp.com",
//   databaseURL: "https://krew-user-app.firebaseio.com",
//   projectId: "krew-user-app",
//   storageBucket: "krew-user-app.appspot.com",
//   messagingSenderId: "16831185707"
// };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToasterModule
    //NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAzwzNzq3irmwjUVU1MhMuwP7qD0CfZijA'})
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  providers: [AuthGuard, AuthService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
