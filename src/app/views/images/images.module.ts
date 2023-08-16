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
import { AllImagesComponent } from './all-images/all-images.component';
import { ImagesDetailComponent} from './images-detail/images-detail.component';
import { AddImagesComponent} from './add-images/add-images.component';
import { EditImagesComponent} from './edit-images/edit-images.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Routing
import { ImagesRoutingModule } from './images-routing.module';
import { ImagesService } from './images.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    CommonModule,
    ImagesRoutingModule,
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
  providers: [ImagesService,IconSetService],
  declarations: [
    AllImagesComponent,
    ImagesDetailComponent,
    AddImagesComponent,
    EditImagesComponent
  ],
})

export class ImagesModule {}
