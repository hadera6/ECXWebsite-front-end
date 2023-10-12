import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllAnnouncementsComponent } from './all-announcements/all-announcements.component';
import { AnnouncementsDetailComponent } from './announcements-detail/announcements-detail.component';
import { AddAnnouncementsComponent } from './add-announcements/add-announcements.component';
import { EditAnnouncementsComponent } from './edit-announcements/edit-announcements.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Announcements',
    },
    children: [
      
      {
        path: '',
        component: AllAnnouncementsComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: AnnouncementsDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditAnnouncementsComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddAnnouncementsComponent,
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
export class AnnouncementsRoutingModule {
}
