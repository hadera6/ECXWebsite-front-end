import { Component, OnInit } from '@angular/core';
import { PageCatagoriesService } from '../page-catagories.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-page-catagories-detail',
  templateUrl: './page-catagories-detail.component.html',
  styleUrls: ['./page-catagories-detail.component.scss']
})
export class PageCatagoriesDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  imgPath:any=null;
  data:any;
  constructor(private service:PageCatagoriesService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getPageCatagory(this.id);
  this.data = this.response.data;
  this.imgPath = this.service.getImagePath()+this.response.data.imgName;
  }
}
