import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCommoditiesComponent } from './all-commodities/all-commodities.component';
import { CommoditiesDetailComponent } from './commodities-detail/commodities-detail.component';
import { AddCommoditiesComponent } from './add-commodities/add-commodities.component';
import { EditCommoditiesComponent } from './edit-commodities/edit-commodities.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Commodities',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-commodities',
      },
      {
        path: '',
        component: AllCommoditiesComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: CommoditiesDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditCommoditiesComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddCommoditiesComponent,
        data: {
          title: 'AddCommodities',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommoditiesRoutingModule {}