import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../announcements.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-announcements-detail',
  templateUrl: './announcements-detail.component.html',
  styleUrls: ['./announcements-detail.component.scss']
})
export class AnnouncementsDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  filePath:any=null;
  data:any;
  constructor(private service:AnnouncementsService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getAnnouncement(this.id);
  this.data = this.response.data;
  this.filePath = this.service.getFilePath()+this.response.data.fileName;
  }
}
