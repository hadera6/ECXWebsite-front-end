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
import { AllPublicationsComponent } from './all-publications/all-publications.component';
import { PublicationsDetailComponent} from './publications-detail/publications-detail.component';
import { AddPublicationsComponent} from './add-publications/add-publications.component';
import { EditPublicationsComponent} from './edit-publications/edit-publications.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { PublicationsRoutingModule } from './publications-routing.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { PublicationsService } from './publications.service'
import { SafePipe } from 'src/app/safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    PublicationsRoutingModule,
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
  providers: [PublicationsService,IconSetService],
  declarations: [
    AllPublicationsComponent,
    PublicationsDetailComponent,
    AddPublicationsComponent,
    EditPublicationsComponent,
    
  ],
})

export class PublicationsModule {}
