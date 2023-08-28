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
import { AllCommoditiesComponent } from './all-commodities/all-commodities.component';
import { CommoditiesDetailComponent} from './commodities-detail/commodities-detail.component';
import { AddCommoditiesComponent} from './add-commodities/add-commodities.component';
import { EditCommoditiesComponent} from './edit-commodities/edit-commodities.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { CommoditiesRoutingModule } from './commodities-routing.module';
import { CommoditiesService } from './commodities.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';

@NgModule({
  imports: [
    CommonModule,
    CommoditiesRoutingModule,
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
  providers: [CommoditiesService,IconSetService],
  declarations: [
    AllCommoditiesComponent,
    CommoditiesDetailComponent,
    AddCommoditiesComponent,
    EditCommoditiesComponent
  ],
})

export class CommoditiesModule {}
