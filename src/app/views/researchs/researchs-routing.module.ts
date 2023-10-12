import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllResearchsComponent } from './all-researchs/all-researchs.component';
import { ResearchsDetailComponent } from './researchs-detail/researchs-detail.component';
import { AddResearchsComponent } from './add-researchs/add-researchs.component';
import { EditResearchsComponent } from './edit-researchs/edit-researchs.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Researchs',
    },
    children: [
      
      {
        path: '',
        component: AllResearchsComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: ResearchsDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditResearchsComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddResearchsComponent,
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
export class ResearchsRoutingModule {
}
