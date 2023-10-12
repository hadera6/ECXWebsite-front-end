import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllPublicationsComponent } from './all-publications/all-publications.component';
import { PublicationsDetailComponent } from './publications-detail/publications-detail.component';
import { AddPublicationsComponent } from './add-publications/add-publications.component';
import { EditPublicationsComponent } from './edit-publications/edit-publications.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Publications',
    },
    children: [
      
      {
        path: '',
        component: AllPublicationsComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: PublicationsDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditPublicationsComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddPublicationsComponent,
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
export class PublicationsRoutingModule {
}
