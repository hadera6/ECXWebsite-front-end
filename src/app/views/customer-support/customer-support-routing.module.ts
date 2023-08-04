import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerSupportComponent } from './customer-support.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerSupportComponent,
    data: {
      title: `CustomerSupport`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSupportRoutingModule {
}
