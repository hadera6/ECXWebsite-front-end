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
  InputGroupComponent,
} from '@coreui/angular';

// views
import { AllBoardOfDirectorsComponent } from './all-board-of-directors/all-board-of-directors.component';
import { BoardOfDirectorsDetailComponent} from './board-of-directors-detail/board-of-directors-detail.component';
import { AddBoardOfDirectorsComponent} from './add-board-of-directors/add-board-of-directors.component';
import { EditBoardOfDirectorsComponent} from './edit-board-of-directors/edit-board-of-directors.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { BoardOfDirectorsRoutingModule } from './board-of-directors-routing.module';
import { BoardOfDirectorsService } from './board-of-directors.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';

@NgModule({
  imports: [
    CommonModule,
    BoardOfDirectorsRoutingModule,
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
    CardModule,
    TableModule,
    HttpClientModule,
    IconModule,

    FormsModule,
    ReactiveFormsModule,
    LanguagesModule
    
  ],
  providers: [BoardOfDirectorsService,IconSetService],
  declarations: [
    AllBoardOfDirectorsComponent,
    BoardOfDirectorsDetailComponent,
    AddBoardOfDirectorsComponent,
    EditBoardOfDirectorsComponent
  ],
})

export class BoardOfDirectorsModule {}
