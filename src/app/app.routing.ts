import { AdminProfileComponent } from './views/profile/profile.component';
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
  // {
  //   path: 'profile',
  //   component: FullLayout,
  //   canActivate: [AuthGuard],
  //   data: {
  //     title: 'Profile'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './views/profile/profile.module#ProfileModule'
  //     }
  //   ]
  // },
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
    path: 'cancelReason',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/cancelReason/cancelReason.module#CancelReasonModule'
      }
    ]
  },
  {
    path: 'materials',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/material/material.module#MaterialsModule'
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
    path: 'language',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/language/language.module#LanguageModule'
      }
    ]
  },
  {
    path: 'job',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/job/job.module#JobModule'
      }
    ]
  },
  {
    path: 'currency',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/currency/currency.module#CurrencyModule'
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
    path: 'question',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/question/question.module#QuestionModule',
      }
    ]
  },
  {
    path: 'answer',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/answer/answer.module#AnswerModule',
      }
    ]
  },
  {
    path: 'setting',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/settings/settings.module#SettingsModule',
      }
    ]
  },
  {
    path: 'slider',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/intro-sliders/intro-sliders.module#IntroSlidersModule',
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
  },
  {
    path: 'promotions',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/promotions/promotions.module#PromotionsModule'
      }
    ]
  },
  {
    path: 'payment',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/payment/payment.module#PaymentModule'
      }
    ]
  },
  {
    path: 'chat',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/chat/chat.module#ChatModule'
      }
    ]
  },
  {
    path: 'agent',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/agent/agent.module#AgentModule'
      }
    ]
  },
  {
    path: 'role',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/role/role.module#RoleModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
