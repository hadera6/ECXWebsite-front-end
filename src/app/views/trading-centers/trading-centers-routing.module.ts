import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTradingCentersComponent } from './all-trading-centers/all-trading-centers.component';
import { TradingCentersDetailComponent } from './trading-centers-detail/trading-centers-detail.component';
import { AddTradingCentersComponent } from './add-trading-centers/add-trading-centers.component';
import { EditTradingCentersComponent } from './edit-trading-centers/edit-trading-centers.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'TradingCenters',
    },
    children: [
      
      {
        path: '',
        component: AllTradingCentersComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: TradingCentersDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditTradingCentersComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddTradingCentersComponent,
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
export class TradingCentersRoutingModule {}