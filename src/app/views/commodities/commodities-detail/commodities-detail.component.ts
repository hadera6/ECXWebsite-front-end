import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-commodities-detail',
  templateUrl: './commodities-detail.component.html',
  styleUrls: ['./commodities-detail.component.scss']
})
export class CommoditiesDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  imgPath:any=null;
  data:any;
  constructor(private service:CommoditiesService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getCommodity(this.id);
  this.data = this.response.data;
  this.imgPath = this.service.getImagePath()+this.response.data.imgName;
  }
}
