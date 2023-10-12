import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../publications.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-publications-detail',
  templateUrl: './publications-detail.component.html',
  styleUrls: ['./publications-detail.component.scss']
})
export class PublicationsDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  filePath:any=null;
  data:any;
  constructor(private service:PublicationsService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getPublication(this.id);
  this.data = this.response.data;
  this.filePath = this.service.getFilePath()+this.response.data.fileName;
  }
}
