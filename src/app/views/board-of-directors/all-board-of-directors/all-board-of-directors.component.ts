import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { BoardOfDirectorsService } from '../board-of-directors.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-board-of-directors',
  templateUrl: './all-board-of-directors.component.html',
  styleUrls: ['./all-board-of-directors.component.scss']
})
export class AllBoardOfDirectorsComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  imagePath = this.service.getImagePath();
  constructor(private service:BoardOfDirectorsService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getBoardOfDirectors());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteBoardOfDirector(id);
    this.getResponse = (await this.service.getBoardOfDirectors());
  }
  onEdit(id:any){
    this.router.navigateByUrl('board-of-directors/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('board-of-directors/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('board-of-directors/add');
  }
}