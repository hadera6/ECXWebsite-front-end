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
import { AllPagesComponent } from './all-pages/all-pages.component';
import { PagesDetailComponent} from './pages-detail/pages-detail.component';
import { AddPagesComponent} from './add-pages/add-pages.component';
import { EditPagesComponent} from './edit-pages/edit-pages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { PagesRoutingModule } from './pages-routing.module';
import { PagesService } from './pages.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { PageCatagoriesDetailComponent } from '../page-catagories/page-catagories-detail/page-catagories-detail.component';
import { PageCatagoriesModule } from '../page-catagories/page-catagories.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
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
    PageCatagoriesModule
    
  ],
  providers: [PagesService,IconSetService],
  declarations: [
    AllPagesComponent,
    PagesDetailComponent,
    AddPagesComponent,
    EditPagesComponent
  ],
})

export class PagesModule {}
