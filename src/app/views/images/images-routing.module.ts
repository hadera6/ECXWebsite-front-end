import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllImagesComponent } from './all-images/all-images.component';
import { ImagesDetailComponent } from './images-detail/images-detail.component';
import { AddImagesComponent } from './add-images/add-images.component';
import { EditImagesComponent } from './edit-images/edit-images.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Images',
    },
    children: [
      
      {
        path: '',
        component: AllImagesComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: ImagesDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditImagesComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddImagesComponent,
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
export class ImagesRoutingModule {
}
