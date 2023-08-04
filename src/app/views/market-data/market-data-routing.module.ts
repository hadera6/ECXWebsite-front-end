import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketDataComponent } from './market-data.component';

const routes: Routes = [
  {
    path: '',
    component: MarketDataComponent,
    data: {
      title: `MarketData`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketDataRoutingModule {
}
