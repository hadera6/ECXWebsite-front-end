import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareerComponent } from './career.component';

const routes: Routes = [
  {
    path: '',
    component: CareerComponent,
    data: {
      title: `Career`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule {
}
