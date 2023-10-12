import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { ResearchsService } from '../researchs.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-researchs',
  templateUrl: './all-researchs.component.html',
  styleUrls: ['./all-researchs.component.scss']
})
export class AllResearchsComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  filePath = this.service.getFilePath();
  constructor(private service:ResearchsService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllResearch());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteResearch(id);
    this.getResponse = (await this.service.getAllResearch());
  }
  onEdit(id:any){
    this.router.navigateByUrl('researchs/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('researchs/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('researchs/add');
  }
}