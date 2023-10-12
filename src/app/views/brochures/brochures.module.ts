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
import { AllBrochuresComponent } from './all-brochures/all-brochures.component';
import { BrochuresDetailComponent} from './brochures-detail/brochures-detail.component';
import { AddBrochuresComponent} from './add-brochures/add-brochures.component';
import { EditBrochuresComponent} from './edit-brochures/edit-brochures.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { BrochuresRoutingModule } from './brochures-routing.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';
import { BrochuresService } from './brochures.service'
import { SafePipe } from 'src/app/safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    BrochuresRoutingModule,
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
  providers: [BrochuresService,IconSetService],
  declarations: [
    AllBrochuresComponent,
    BrochuresDetailComponent,
    AddBrochuresComponent,
    EditBrochuresComponent
  ],
})

export class BrochuresModule {}
