import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.scss']
})
export class PagesDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  imgPath:any=null;
  data:any;
  constructor(private service:PagesService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getPage(this.id);
  this.data = this.response.data;
  this.imgPath = this.service.getImagePath()+this.response.data.imgName;
  }
}
