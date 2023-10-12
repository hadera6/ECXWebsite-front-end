import { Component, OnInit } from '@angular/core';
import { BrochuresService } from '../brochures.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-brochures-detail',
  templateUrl: './brochures-detail.component.html',
  styleUrls: ['./brochures-detail.component.scss']
})
export class BrochuresDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  filePath:any=null;
  data:any;
  constructor(private service:BrochuresService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getBrochure(this.id);
  this.data = this.response.data;
  this.filePath = this.service.getFilePath()+this.response.data.fileName;
  }
}
