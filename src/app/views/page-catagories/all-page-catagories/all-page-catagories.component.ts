import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { PageCatagoriesService } from '../page-catagories.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-page-catagories',
  templateUrl: './all-page-catagories.component.html',
  styleUrls: ['./all-page-catagories.component.scss']
})
export class AllPageCatagoriesComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  imagePath = this.service.getImagePath();
  constructor(private service:PageCatagoriesService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllPageCatagory());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deletePageCatagory(id);
    this.getResponse = (await this.service.getAllPageCatagory());
  }
  onEdit(id:any){
    this.router.navigateByUrl('page-catagories/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('page-catagories/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('page-catagories/add');
  }
}