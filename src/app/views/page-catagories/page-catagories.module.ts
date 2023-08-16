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
import { AllPageCatagoriesComponent } from './all-page-catagories/all-page-catagories.component';
import { PageCatagoriesDetailComponent} from './page-catagories-detail/page-catagories-detail.component';
import { AddPageCatagoriesComponent} from './add-page-catagories/add-page-catagories.component';
import { EditPageCatagoriesComponent} from './edit-page-catagories/edit-page-catagories.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { PageCatagoriesRoutingModule } from './page-catagories-routing.module';
import { PageCatagoriesService } from './page-catagories.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    CommonModule,
    PageCatagoriesRoutingModule,
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
    ReactiveFormsModule
    
  ],
  providers: [PageCatagoriesService,IconSetService],
  declarations: [
    AllPageCatagoriesComponent,
    PageCatagoriesDetailComponent,
    AddPageCatagoriesComponent,
    EditPageCatagoriesComponent
  ],
})

export class PageCatagoriesModule {}
