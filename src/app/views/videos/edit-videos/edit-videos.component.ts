import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { VideosService } from '../videos.service';
import { LanguagesService } from '../../languages/languages.service';

import { ActivatedRoute, ParamMap } from '@angular/router'
import {  } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-videos',
  templateUrl: './edit-videos.component.html',
  styleUrls: ['./edit-videos.component.scss']
})
export class EditVideosComponent implements OnInit {

  form:FormGroup;
  editResponse:any={};
  getResponse:any={};
  languages:any={};
  data:any={};
  id:any;
  imagePath:any;

  constructor(
    public fb: FormBuilder, 
    private service:VideosService,
    private langService:LanguagesService,
    private route: ActivatedRoute
    ) {
    this.form = this.fb.group({
      name: this.data.name,
      description: this.data.description,
      videoFile: null,
      langId: this.data.langId,
      createdBy: [''],
      updatedBy: ['']
    });
  }

  async ngOnInit() {

    await this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.languages = await this.langService.getAllLanguage();

    this.getResponse = await this.service.getVideo(this.id);

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
      videoFile: file
    });
    this.form.get('videoFile').updateValueAndValidity();
  }
  
  async submitForm () {
    var formData: any = new FormData();
    formData.append('id',this.id);
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('videoFile', this.form.get('videoFile').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    this.editResponse = await this.service.editVideo(formData);

    console.log(formData);
  }
}
