import { NgModule } from '@angular/core';
import { BoardOfDirectorsRoutingModule } from './board-of-directors-routing.module';
import { BoardOfDirectorsComponent } from './board-of-directors.component';
import { CommonModule } from '@angular/common';

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
  UtilitiesModule
  
} from '@coreui/angular';

@NgModule({
  imports: [

    CommonModule,
    BoardOfDirectorsRoutingModule,
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
    CardModule
  
  ],
  declarations: [BoardOfDirectorsComponent]
})
export class BoardOfDirectorsModule {
}
