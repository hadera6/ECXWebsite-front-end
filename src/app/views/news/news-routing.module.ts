import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllNewsComponent } from './all-news/all-news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'News',
    },
    children: [
      
      {
        path: '',
        component: AllNewsComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: NewsDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditNewsComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddNewsComponent,
        data: {
          title: 'Add',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}