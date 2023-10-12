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
import { AllTrainingDocsComponent } from './all-training-docs/all-training-docs.component';
import { TrainingDocsDetailComponent} from './training-docs-detail/training-docs-detail.component';
import { AddTrainingDocsComponent} from './add-training-docs/add-training-docs.component';
import { EditTrainingDocsComponent} from './edit-training-docs/edit-training-docs.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { TrainingDocsRoutingModule } from './training-docs-routing.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { TrainingDocsService } from './training-docs.service'
import { SafePipe } from 'src/app/safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    TrainingDocsRoutingModule,
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
  providers: [TrainingDocsService,IconSetService],
  declarations: [
    AllTrainingDocsComponent,
    TrainingDocsDetailComponent,
    AddTrainingDocsComponent,
    EditTrainingDocsComponent,
    
  ],
})

export class TrainingDocsModule {}
