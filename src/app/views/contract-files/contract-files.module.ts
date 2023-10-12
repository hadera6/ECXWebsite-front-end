import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// CoreUI Modules
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  TableModule,
  UtilitiesModule,
  InputGroupComponent
} from '@coreui/angular';

// views
import { AllContractFilesComponent } from './all-contract-files/all-contract-files.component';
import { ContractFilesDetailComponent} from './contract-files-detail/contract-files-detail.component';
import { AddContractFilesComponent} from './add-contract-files/add-contract-files.component';
import { EditContractFilesComponent} from './edit-contract-files/edit-contract-files.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { ContractFilesRoutingModule } from './contract-files-routing.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { CommoditiesModule } from '../commodities/commodities.module';
import { ContractFilesService } from './contract-files.service'
import { SafePipe } from 'src/app/safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    ContractFilesRoutingModule,
    CardModule,
    InputGroupComponent,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    TableModule,
    HttpClientModule,
    IconModule,
  
    FormsModule,
    ReactiveFormsModule,
    LanguagesModule,
    CommoditiesModule,
    SafePipe
   
    
  ],
  providers: [ContractFilesService,IconSetService],
  declarations: [
    AllContractFilesComponent,
    ContractFilesDetailComponent,
    AddContractFilesComponent,
    EditContractFilesComponent,
    
  ],
})

export class ContractFilesModule {}
