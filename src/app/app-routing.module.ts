import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'commodities',
        loadChildren: () =>
          import('./views/commodities/commodities.module').then((m) => m.CommoditiesModule)
      },
      {
        path: 'board-of-directors',
        loadChildren: () =>
          import('./views/board-of-directors/board-of-directors.module').then((m) => m.BoardOfDirectorsModule)
      },
      {
        path: 'career',
        loadChildren: () =>
          import('./views/career/career.module').then((m) => m.CareerModule)
      },
      {
        path: 'contact-info',
        loadChildren: () =>
          import('./views/contact-info/contact-info.module').then((m) => m.ContactInfoModule)
      },
      {
        path: 'market-data',
        loadChildren: () =>
          import('./views/market-data/market-data.module').then((m) => m.MarketDataModule)
      },
      {
        path: 'media',
        loadChildren: () =>
          import('./views/media/media.module').then((m) => m.MediaModule)
      },
      {
        path: 'customer-support',
        loadChildren: () =>
          import('./views/customer-support/customer-support.module').then((m) => m.CustomerSupportModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      }
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
