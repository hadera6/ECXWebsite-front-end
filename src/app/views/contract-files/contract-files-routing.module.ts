import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllContractFilesComponent } from './all-contract-files/all-contract-files.component';
import { ContractFilesDetailComponent } from './contract-files-detail/contract-files-detail.component';
import { AddContractFilesComponent } from './add-contract-files/add-contract-files.component';
import { EditContractFilesComponent } from './edit-contract-files/edit-contract-files.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ContractFiles',
    },
    children: [
      
      {
        path: '',
        component: AllContractFilesComponent,
        data: {
          title: 'All',
        },
      },
      {
        path: 'detail/:id',
        component: ContractFilesDetailComponent,
        data: {
          title: 'Detail',
        },
      },
      {
        path: 'edit/:id',
        component: EditContractFilesComponent,
        data: {
          title: 'Edit',
        },
      }
      ,
      {
        path: 'add',
        component: AddContractFilesComponent,
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
export class ContractFilesRoutingModule {
}
