import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { BrochuresService } from '../brochures.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-brochures',
  templateUrl: './all-brochures.component.html',
  styleUrls: ['./all-brochures.component.scss']
})
export class AllBrochuresComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  filePath = this.service.getFilePath();
  constructor(private service:BrochuresService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllBrochure());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteBrochure(id);
    this.getResponse = (await this.service.getAllBrochure());
  }
  onEdit(id:any){
    this.router.navigateByUrl('brochures/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('brochures/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('brochures/add');
  }
}