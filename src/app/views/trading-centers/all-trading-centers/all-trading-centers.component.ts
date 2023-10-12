import { Component, OnInit, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { TradingCentersService } from '../trading-centers.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-trading-centers',
  templateUrl: './all-trading-centers.component.html',
  styleUrls: ['./all-trading-centers.component.scss']
})
export class AllTradingCentersComponent  implements OnInit  {

  icons = { cilPencil, cilTrash, cilViewStream };
  getResponse:any={};
  deleteResponse:any={};

  imagePath = this.service.getImagePath();
  constructor(private service:TradingCentersService,private router: Router) {}
  async ngOnInit() {
    this.getResponse = (await this.service.getTradingCenters());
  }
  
  async onDelete(id:any){
    this.deleteResponse = await this.service.deleteTradingCenter(id);
    this.getResponse = (await this.service.getTradingCenters());
  }
  onEdit(id:any){
    this.router.navigateByUrl('trading-centers/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('trading-centers/detail/'+id);
  }
  onAdd(){
    this.router.navigateByUrl('trading-centers/add');
  }
}