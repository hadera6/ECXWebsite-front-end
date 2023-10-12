import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { AnnouncementsService } from '../announcements.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-announcements',
  templateUrl: './all-announcements.component.html',
  styleUrls: ['./all-announcements.component.scss']
})
export class AllAnnouncementsComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  filePath = this.service.getFilePath();
  constructor(private service:AnnouncementsService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllAnnouncement());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteAnnouncement(id);
    this.getResponse = (await this.service.getAllAnnouncement());
  }
  onEdit(id:any){
    this.router.navigateByUrl('announcements/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('announcements/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('announcements/add');
  }
}