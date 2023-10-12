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
        path: 'news',
        loadChildren: () =>
          import('./views/news/news.module').then((m) => m.NewsModule)
      },
      {
        path: 'page-catagories',
        loadChildren: () =>
          import('./views/page-catagories/page-catagories.module').then((m) => m.PageCatagoriesModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'board-of-directors',
        loadChildren: () =>
          import('./views/board-of-directors/board-of-directors.module').then((m) => m.BoardOfDirectorsModule)
      },
      {
        path: 'images',
        loadChildren: () =>
          import('./views/images/images.module').then((m) => m.ImagesModule)
      },
      {
        path: 'publications',
        loadChildren: () =>
          import('./views/publications/publications.module').then((m) => m.PublicationsModule)
      },
      {
        path: 'announcements',
        loadChildren: () =>
          import('./views/announcements/announcements.module').then((m) => m.AnnouncementsModule)
      },
      {
        path: 'training-docs',
        loadChildren: () =>
          import('./views/training-docs/training-docs.module').then((m) => m.TrainingDocsModule)
      },
      {
        path: 'market-data',
        loadChildren: () =>
          import('./views/market-data/market-data.module').then((m) => m.MarketDataModule)
      },
      {
        path: 'researchs',
        loadChildren: () =>
          import('./views/researchs/researchs.module').then((m) => m.ResearchsModule)
      },
      {
        path: 'brochures',
        loadChildren: () =>
          import('./views/brochures/brochures.module').then((m) => m.BrochuresModule)
      },
      {
        path: 'contract-files',
        loadChildren: () =>
          import('./views/contract-files/contract-files.module').then((m) => m.ContractFilesModule)
      },
      {
        path: 'videos',
        loadChildren: () =>
          import('./views/videos/videos.module').then((m) => m.VideosModule)
      },
      {
        path: 'warehouses',
        loadChildren: () =>
          import('./views/warehouses/warehouses.module').then((m) => m.WarehousesModule)
      },
      {
        path: 'trading-centers',
        loadChildren: () =>
          import('./views/trading-centers/trading-centers.module').then((m) => m.TradingCentersModule)
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
