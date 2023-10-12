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
import { AllVideosComponent } from './all-videos/all-videos.component';
import { VideosDetailComponent} from './videos-detail/videos-detail.component';
import { AddVideosComponent} from './add-videos/add-videos.component';
import { EditVideosComponent} from './edit-videos/edit-videos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { VideosRoutingModule } from './videos-routing.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { VideosService } from './videos.service'
import { SafePipe } from 'src/app/safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    VideosRoutingModule,
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
    SafePipe
   
    
  ],
  providers: [VideosService,IconSetService],
  declarations: [
    AllVideosComponent,
    VideosDetailComponent,
    AddVideosComponent,
    EditVideosComponent,
    
  ],
})

export class VideosModule {}
