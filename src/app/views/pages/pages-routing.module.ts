import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllPagesComponent } from './all-pages/all-pages.component';
import { PagesDetailComponent } from './pages-detail/pages-detail.component';
import { AddPagesComponent } from './add-pages/add-pages.component';
import { EditPagesComponent } from './edit-pages/edit-pages.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pages',
    },
    children: [
      
      {
        path: '',
        component: AllPagesComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: PagesDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditPagesComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddPagesComponent,
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
export class PagesRoutingModule {
}
