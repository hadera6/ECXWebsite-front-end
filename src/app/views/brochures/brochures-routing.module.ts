import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllBrochuresComponent } from './all-brochures/all-brochures.component';
import { BrochuresDetailComponent } from './brochures-detail/brochures-detail.component';
import { AddBrochuresComponent } from './add-brochures/add-brochures.component';
import { EditBrochuresComponent } from './edit-brochures/edit-brochures.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Brochures',
    },
    children: [
      
      {
        path: '',
        component: AllBrochuresComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: BrochuresDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditBrochuresComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddBrochuresComponent,
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
export class BrochuresRoutingModule {
}
