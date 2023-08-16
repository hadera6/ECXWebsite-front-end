import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllPageCatagoriesComponent } from './all-page-catagories/all-page-catagories.component';
import { PageCatagoriesDetailComponent } from './page-catagories-detail/page-catagories-detail.component';
import { AddPageCatagoriesComponent } from './add-page-catagories/add-page-catagories.component';
import { EditPageCatagoriesComponent } from './edit-page-catagories/edit-page-catagories.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'PageCatagories',
    },
    children: [
      
      {
        path: '',
        component: AllPageCatagoriesComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: PageCatagoriesDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditPageCatagoriesComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddPageCatagoriesComponent,
        data: {
          title: 'Add',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCatagoriesRoutingModule {
}
