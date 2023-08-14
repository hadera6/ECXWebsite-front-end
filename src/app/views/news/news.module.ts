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
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsDetailComponent} from './news-detail/news-detail.component';
import { AddNewsComponent} from './add-news/add-news.component';
import { EditNewsComponent} from './edit-news/edit-news.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { NewsRoutingModule } from './News-routing.module';
import { NewsService } from './news.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
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
  providers: [NewsService,IconSetService],
  declarations: [
    AllNewsComponent,
    NewsDetailComponent,
    AddNewsComponent,
    EditNewsComponent
  ],
})

export class NewsModule {}
