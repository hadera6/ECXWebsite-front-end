import { Component, OnInit } from '@angular/core';
import { BoardOfDirectorsService } from '../board-of-directors.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-board-of-directors-detail',
  templateUrl: './board-of-directors-detail.component.html',
  styleUrls: ['./board-of-directors-detail.component.scss']
})
export class BoardOfDirectorsDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  imgPath:any=null;
  data:any;
  constructor(private service:BoardOfDirectorsService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getBoardOfDirector(this.id);
  this.data = this.response.data;
  this.imgPath = this.service.getImagePath()+this.response.data.imgName;
  }
}
