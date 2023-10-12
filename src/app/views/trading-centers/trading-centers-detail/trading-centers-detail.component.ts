import { Component, OnInit } from '@angular/core';
import { TradingCentersService } from '../trading-centers.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-trading-centers-detail',
  templateUrl: './trading-centers-detail.component.html',
  styleUrls: ['./trading-centers-detail.component.scss']
})
export class TradingCentersDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  imgPath:any=null;
  data:any;
  constructor(private service:TradingCentersService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getTradingCenter(this.id);
  this.data = this.response.data;
  this.imgPath = this.service.getImagePath()+this.response.data.imgName;
  }
}
