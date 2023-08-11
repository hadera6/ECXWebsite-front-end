import { Component, OnInit, SimpleChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { CommoditiesService } from '../commodities.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-commodities',
  templateUrl: './all-commodities.component.html',
  styleUrls: ['./all-commodities.component.scss']
})
export class AllCommoditiesComponent  implements OnInit {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  imagePath = this.service.getImagePath();
  constructor(private service:CommoditiesService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getCommodities());
  }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteCommodity(id);
  }
  onEdit(id:any){
    this.router.navigateByUrl('commodities/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('commodities/detail/'+id);
  }
}