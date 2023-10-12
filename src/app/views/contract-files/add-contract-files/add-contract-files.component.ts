import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContractFilesService } from '../contract-files.service';
import { CommoditiesService } from '../../commodities/commodities.service';
import { LanguagesService } from '../../languages/languages.service';

@Component({
  selector: 'app-add-contract-files',
  templateUrl: './add-contract-files.component.html',
  styleUrls: ['./add-contract-files.component.scss']
})
export class AddContractFilesComponent implements OnInit {

  form:FormGroup;
  response:any;
  languages :any={};
  commodities :any={};

  constructor(
      public fb: FormBuilder, 
      private http: HttpClient, 
      private service:ContractFilesService,
      private commodityService:CommoditiesService,
      private langService:LanguagesService
    ) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      pdfFile: [null],
      createdBy: [''],
      updatedBy: [''],
      langId: [''],
      commodityId: ['']
    });
  }

  async ngOnInit(){
    this.languages = await this.langService.getAllLanguage();
    this.commodities = await this.commodityService.getCommodities();
  }
  uploadFile(event:Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      pdfFile: file
    });
    this.form.get('pdfFile').updateValueAndValidity();
  }
  
  async submitForm () {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('file', this.form.get('pdfFile').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('commodityId', this.form.get('commodityId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    
    this.response = await this.service.createContractFile(formData);

  }
}
