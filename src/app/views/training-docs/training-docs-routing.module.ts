import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTrainingDocsComponent } from './all-training-docs/all-training-docs.component';
import { TrainingDocsDetailComponent } from './training-docs-detail/training-docs-detail.component';
import { AddTrainingDocsComponent } from './add-training-docs/add-training-docs.component';
import { EditTrainingDocsComponent } from './edit-training-docs/edit-training-docs.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'TrainingDocs',
    },
    children: [
      
      {
        path: '',
        component: AllTrainingDocsComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: TrainingDocsDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditTrainingDocsComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddTrainingDocsComponent,
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
export class TrainingDocsRoutingModule {
}
