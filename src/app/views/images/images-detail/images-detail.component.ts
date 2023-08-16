import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-images-detail',
  templateUrl: './images-detail.component.html',
  styleUrls: ['./images-detail.component.scss']
})
export class ImagesDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  imgPath:any=null;
  data:any;
  constructor(private service:ImagesService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getImage(this.id);
  this.data = this.response.data;
  this.imgPath = this.service.getImagePath()+this.response.data.imgName;
  }
}
