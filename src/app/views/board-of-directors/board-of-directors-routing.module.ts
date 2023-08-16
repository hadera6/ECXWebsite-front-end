import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllBoardOfDirectorsComponent } from './all-board-of-directors/all-board-of-directors.component';
import { BoardOfDirectorsDetailComponent } from './board-of-directors-detail/board-of-directors-detail.component';
import { AddBoardOfDirectorsComponent } from './add-board-of-directors/add-board-of-directors.component';
import { EditBoardOfDirectorsComponent } from './edit-board-of-directors/edit-board-of-directors.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'BoardOfDirectors',
    },
    children: [
      
      {
        path: '',
        component: AllBoardOfDirectorsComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: BoardOfDirectorsDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditBoardOfDirectorsComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddBoardOfDirectorsComponent,
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
export class BoardOfDirectorsRoutingModule {}