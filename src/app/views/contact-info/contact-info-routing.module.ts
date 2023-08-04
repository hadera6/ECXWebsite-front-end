import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactInfoComponent } from './contact-info.component';

const routes: Routes = [
  {
    path: '',
    component: ContactInfoComponent,
    data: {
      title: `ContactInfo`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactInfoRoutingModule {
}
