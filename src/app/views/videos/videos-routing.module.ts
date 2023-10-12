import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllVideosComponent } from './all-videos/all-videos.component';
import { VideosDetailComponent } from './videos-detail/videos-detail.component';
import { AddVideosComponent } from './add-videos/add-videos.component';
import { EditVideosComponent } from './edit-videos/edit-videos.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Videos',
    },
    children: [
      
      {
        path: '',
        component: AllVideosComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: VideosDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditVideosComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddVideosComponent,
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
export class VideosRoutingModule {
}
