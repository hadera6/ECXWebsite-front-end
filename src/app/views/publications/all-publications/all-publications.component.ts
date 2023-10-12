import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { PublicationsService } from '../publications.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-publications',
  templateUrl: './all-publications.component.html',
  styleUrls: ['./all-publications.component.scss']
})
export class AllPublicationsComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  filePath = this.service.getFilePath();
  constructor(private service:PublicationsService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllPublication());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deletePublication(id);
    this.getResponse = (await this.service.getAllPublication());
  }
  onEdit(id:any){
    this.router.navigateByUrl('publications/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('publications/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('publications/add');
  }
}