import { Component, OnInit } from '@angular/core';
import { ContractFilesService } from '../contract-files.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-contract-files-detail',
  templateUrl: './contract-files-detail.component.html',
  styleUrls: ['./contract-files-detail.component.scss']
})
export class ContractFilesDetailComponent implements OnInit {
  
  response:any={};
  id:any;
  filePath:any=null;
  data:any;
  constructor(private service:ContractFilesService,private route: ActivatedRoute) {}
  async ngOnInit() {

  await this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  this.response = await this.service.getContractFile(this.id);
  this.data = this.response.data;
  this.filePath = this.service.getFilePath()+this.response.data.fileName;
  }
}
