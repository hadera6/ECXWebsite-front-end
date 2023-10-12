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
import { AllResearchsComponent } from './all-researchs/all-researchs.component';
import { ResearchsDetailComponent} from './researchs-detail/researchs-detail.component';
import { AddResearchsComponent} from './add-researchs/add-researchs.component';
import { EditResearchsComponent} from './edit-researchs/edit-researchs.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { ResearchsRoutingModule } from './researchs-routing.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { ResearchsService } from './researchs.service'
import { SafePipe } from 'src/app/safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    ResearchsRoutingModule,
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
  providers: [ResearchsService,IconSetService],
  declarations: [
    AllResearchsComponent,
    ResearchsDetailComponent,
    AddResearchsComponent,
    EditResearchsComponent,
    
  ],
})

export class ResearchsModule {}
