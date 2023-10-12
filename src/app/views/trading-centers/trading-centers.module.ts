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
import { AllTradingCentersComponent } from './all-trading-centers/all-trading-centers.component';
import { TradingCentersDetailComponent} from './trading-centers-detail/trading-centers-detail.component';
import { AddTradingCentersComponent} from './add-trading-centers/add-trading-centers.component';
import { EditTradingCentersComponent} from './edit-trading-centers/edit-trading-centers.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { TradingCentersRoutingModule } from './trading-centers-routing.module';
import { TradingCentersService } from './trading-centers.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LanguagesModule } from '../languages/languages.module';

@NgModule({
  imports: [
    CommonModule,
    TradingCentersRoutingModule,
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
    LanguagesModule
    
  ],
  providers: [TradingCentersService,IconSetService],
  declarations: [
    AllTradingCentersComponent,
    TradingCentersDetailComponent,
    AddTradingCentersComponent,
    EditTradingCentersComponent
  ],
})

export class TradingCentersModule {}
