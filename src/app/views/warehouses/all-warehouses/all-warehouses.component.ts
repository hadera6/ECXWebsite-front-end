import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { WarehousesService } from '../warehouses.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-warehouses',
  templateUrl: './all-warehouses.component.html',
  styleUrls: ['./all-warehouses.component.scss']
})
export class AllWarehousesComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  imagePath = this.service.getImagePath();
  constructor(private service:WarehousesService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getWarehouses());
  }
  
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteWarehouse(id);
    this.getResponse = (await this.service.getWarehouses());
  }
  onEdit(id:any){
    this.router.navigateByUrl('warehouses/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('warehouses/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('warehouses/add');
  }
}