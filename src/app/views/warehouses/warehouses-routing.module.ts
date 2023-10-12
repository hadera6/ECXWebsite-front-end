import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllWarehousesComponent } from './all-warehouses/all-warehouses.component';
import { WarehousesDetailComponent } from './warehouses-detail/warehouses-detail.component';
import { AddWarehousesComponent } from './add-warehouses/add-warehouses.component';
import { EditWarehousesComponent } from './edit-warehouses/edit-warehouses.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Warehouses',
    },
    children: [
      
      {
        path: '',
        component: AllWarehousesComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: WarehousesDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditWarehousesComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddWarehousesComponent,
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
export class WarehousesRoutingModule {}