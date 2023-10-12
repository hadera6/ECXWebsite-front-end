import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ContractFilesService } from '../contract-files.service';
import { CommoditiesService } from '../../commodities/commodities.service';
import { LanguagesService } from '../../languages/languages.service';

import { ActivatedRoute, ParamMap } from '@angular/router'
//import {  } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-contract-files',
  templateUrl: './edit-contract-files.component.html',
  styleUrls: ['./edit-contract-files.component.scss']
})
export class EditContractFilesComponent implements OnInit {

  form:FormGroup;
  editResponse:any={};
  getResponse:any={};
  commodities:any={};
  languages:any={};
  data:any={};
  id:any;
  imagePath:any;

  constructor(
    public fb: FormBuilder, 
    private service:ContractFilesService,
    private commodityService:CommoditiesService,
    private langService:LanguagesService,
    private route: ActivatedRoute
    ) {
    this.form = this.fb.group({
      name: this.data.name,
      description: this.data.description,
      pdfFile: null,
      langId: this.data.langId,
      commodityId: this.data.commodityId,
      createdBy: [''],
      updatedBy: ['']
    });
  }

  async ngOnInit() {

    await this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.commodities = await this.commodityService.getCommodities();

    this.languages = await this.langService.getAllLanguage();

    this.getResponse = await this.service.getContractFile(this.id);

    this.data = this.getResponse.data;

    this.form.patchValue({
      name: this.data.name,
      description: this.data.description,
      langId: this.data.langId,
      commodityId: this.data.commodityId
    });

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
    formData.append('id',this.id);
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('File', this.form.get('pdfFile').value);
    formData.append('commodityId', this.form.get('commodityId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    this.editResponse = await this.service.editContractFile(formData);

    console.log(formData);
  }
}
