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
import { AllWarehousesComponent } from './all-warehouses/all-warehouses.component';
import { WarehousesDetailComponent} from './warehouses-detail/warehouses-detail.component';
import { AddWarehousesComponent} from './add-warehouses/add-warehouses.component';
import { EditWarehousesComponent} from './edit-warehouses/edit-warehouses.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehousesService } from './warehouses.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';

@NgModule({
  imports: [
    CommonModule,
    WarehousesRoutingModule,
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
    LanguagesModule
    
  ],
  providers: [WarehousesService,IconSetService],
  declarations: [
    AllWarehousesComponent,
    WarehousesDetailComponent,
    AddWarehousesComponent,
    EditWarehousesComponent
  ],
})

export class WarehousesModule {}
