import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { ImagesService } from '../images.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.scss']
})
export class AllImagesComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  imagePath = this.service.getImagePath();
  constructor(private service:ImagesService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllImage());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteImage(id);
    this.getResponse = (await this.service.getAllImage());
  }
  onEdit(id:any){
    this.router.navigateByUrl('images/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('images/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('images/add');
  }
}