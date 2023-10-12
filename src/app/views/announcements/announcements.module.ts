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
import { AllAnnouncementsComponent } from './all-announcements/all-announcements.component';
import { AnnouncementsDetailComponent} from './announcements-detail/announcements-detail.component';
import { AddAnnouncementsComponent} from './add-announcements/add-announcements.component';
import { EditAnnouncementsComponent} from './edit-announcements/edit-announcements.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { AnnouncementsService } from './announcements.service'
import { SafePipe } from 'src/app/safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
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
  providers: [AnnouncementsService,IconSetService],
  declarations: [
    AllAnnouncementsComponent,
    AnnouncementsDetailComponent,
    AddAnnouncementsComponent,
    EditAnnouncementsComponent,
    
  ],
})

export class AnnouncementsModule {}
