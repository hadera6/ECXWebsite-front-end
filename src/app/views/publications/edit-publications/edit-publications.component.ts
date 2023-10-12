import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PublicationsService } from '../publications.service';
import { LanguagesService } from '../../languages/languages.service';

import { ActivatedRoute, ParamMap } from '@angular/router'
import {  } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-publications',
  templateUrl: './edit-publications.component.html',
  styleUrls: ['./edit-publications.component.scss']
})
export class EditPublicationsComponent implements OnInit {

  form:FormGroup;
  editResponse:any={};
  getResponse:any={};
  catagories:any={};
  languages:any={};
  data:any={};
  id:any;
  imagePath:any;

  constructor(
    public fb: FormBuilder, 
    private service:PublicationsService,
    private langService:LanguagesService,
    private route: ActivatedRoute
    ) {
    this.form = this.fb.group({
      name: this.data.name,
      description: this.data.description,
      pdfFile: null,
      langId: this.data.langId,
      catagoryId: this.data.catagoryId,
      createdBy: [''],
      updatedBy: ['']
    });
  }

  async ngOnInit() {

    await this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.languages = await this.langService.getAllLanguage();

    this.getResponse = await this.service.getPublication(this.id);

    this.data = this.getResponse.data;

    this.form.patchValue({
      name: this.data.name,
      description: this.data.description,
      langId: this.data.langId,
      catagoryId: this.data.catagoryId
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
    formData.append('catagoryId', this.form.get('catagoryId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    this.editResponse = await this.service.editPublication(formData);

    console.log(formData);
  }
}
