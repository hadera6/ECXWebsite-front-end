import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { ContractFilesService } from '../contract-files.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-contract-files',
  templateUrl: './all-contract-files.component.html',
  styleUrls: ['./all-contract-files.component.scss']
})
export class AllContractFilesComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  filePath = this.service.getFilePath();
  constructor(private service:ContractFilesService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getAllContractFile());
  }
  // async ngOnChanges(changes) {
  //   // if (changes['getResponse']) {
  //   //   console.log("changed . . .");
  //   // }
  // }
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteContractFile(id);
    this.getResponse = (await this.service.getAllContractFile());
  }
  onEdit(id:any){
    this.router.navigateByUrl('contract-files/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('contract-files/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('contract-files/add');
  }
}