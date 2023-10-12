import { Component, OnInit } from '@angular/core';
import { ResearchsService } from '../researchs.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-researchs-detail',
  templateUrl: './researchs-detail.component.html',
  styleUrls: ['./researchs-detail.component.scss']
})
export class ResearchsDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  filePath:any=null;
  data:any;
  constructor(private service:ResearchsService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getResearch(this.id);
  this.data = this.response.data;
  this.filePath = this.service.getFilePath()+this.response.data.fileName;
  }
}
