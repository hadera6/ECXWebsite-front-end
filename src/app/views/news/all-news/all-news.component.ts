import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { NewsService } from '../news.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};
  
  imagePath = this.service.getImagePath();
  constructor(private service:NewsService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = await this.service.getAllNews();
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteNews(id);
    this.getResponse = await this.service.getAllNews();
  }
  onEdit(id:any){
    this.router.navigateByUrl('news/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('news/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('news/add');
  }
}