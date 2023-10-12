import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-videos-detail',
  templateUrl: './videos-detail.component.html',
  styleUrls: ['./videos-detail.component.scss']
})
export class VideosDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  filePath:any=null;
  data:any;
  constructor(private service:VideosService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getVideo(this.id);
  this.data = this.response.data;
  this.filePath = this.service.getFilePath()+this.response.data.videoName;
  }
}
