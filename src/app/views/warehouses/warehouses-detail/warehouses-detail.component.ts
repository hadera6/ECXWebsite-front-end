import { Component, OnInit } from '@angular/core';
import { WarehousesService } from '../warehouses.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-warehouses-detail',
  templateUrl: './warehouses-detail.component.html',
  styleUrls: ['./warehouses-detail.component.scss']
})
export class WarehousesDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  imgPath:any=null;
  data:any;
  constructor(private service:WarehousesService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getWarehouse(this.id);
  this.data = this.response.data;
  this.imgPath = this.service.getImagePath()+this.response.data.imgName;
  }
}
