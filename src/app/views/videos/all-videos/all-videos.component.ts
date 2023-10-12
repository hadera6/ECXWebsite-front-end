import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { VideosService } from '../videos.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  filePath = this.service.getFilePath();
  constructor(private service:VideosService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllVideo());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteVideo(id);
    this.getResponse = (await this.service.getAllVideo());
  }
  onEdit(id:any){
    this.router.navigateByUrl('videos/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('videos/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('videos/add');
  }
}