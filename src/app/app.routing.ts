import { NgModule } from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';
// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'customers',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/customers/customers.module#CustomersModule'        
      }
    ]
  },
  {
    path: 'cms',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/cms/cms.module#CmsModule'        
      }
    ]
  },
  {
    path: 'zone',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/zone/zone.module#ZoneModule'        
      }
    ]
  },
  {
    path: 'faq',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/faq/faq.module#FaqModule'        
      }
    ]
  },
  {
    path: 'vertical',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/vertical/vertical.module#VerticalModule'        
      }
    ]
  },
  {
    path: 'worker',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/worker/worker.module#WorkerModule'        
      }
    ]
  },
  {
    path: 'service',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/service/service.module#ServiceModule',
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayout,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
