import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { PagesService } from '../pages.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-pages',
  templateUrl: './all-pages.component.html',
  styleUrls: ['./all-pages.component.scss']
})
export class AllPagesComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  imagePath = this.service.getImagePath();
  constructor(private service:PagesService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllPage());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deletePage(id);
    this.getResponse = (await this.service.getAllPage());
  }
  onEdit(id:any){
    this.router.navigateByUrl('pages/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('pages/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('pages/add');
  }
}