import { Component, OnInit } from '@angular/core';
import { TrainingDocsService } from '../training-docs.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-training-docs-detail',
  templateUrl: './training-docs-detail.component.html',
  styleUrls: ['./training-docs-detail.component.scss']
})
export class TrainingDocsDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  filePath:any=null;
  data:any;
  constructor(private service:TrainingDocsService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getTrainingDoc(this.id);
  this.data = this.response.data;
  this.filePath = this.service.getFilePath()+this.response.data.fileName;
  }
}
