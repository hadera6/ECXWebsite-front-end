import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-commodities-detail',
  templateUrl: './commodities-detail.component.html',
  styleUrls: ['./commodities-detail.component.scss']
})
export class CommoditiesDetailComponent implements OnInit {
  
  data:any={};
  id:any;
  imgPath:any;
  constructor(private service:CommoditiesService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = +params.get('id');
  });
  await this.service.getCommodity(this.id)
      .subscribe(response => {
        this.data = response;
        this.imgPath = this.service.getImagePath()+this.data.img;
        console.log(response);
    });
  }
}
