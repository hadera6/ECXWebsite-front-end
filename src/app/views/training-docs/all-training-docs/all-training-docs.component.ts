import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { TrainingDocsService } from '../training-docs.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-training-docs',
  templateUrl: './all-training-docs.component.html',
  styleUrls: ['./all-training-docs.component.scss']
})
export class AllTrainingDocsComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  filePath = this.service.getFilePath();
  constructor(private service:TrainingDocsService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllTrainingDoc());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteTrainingDoc(id);
    this.getResponse = (await this.service.getAllTrainingDoc());
  }
  onEdit(id:any){
    this.router.navigateByUrl('training-docs/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('training-docs/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('training-docs/add');
  }
}