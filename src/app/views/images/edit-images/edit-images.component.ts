import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ImagesService } from '../images.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import {  } from '@angular/platform-browser';
import { LanguagesService } from '../../languages/languages.service';

@Component({
  selector: 'app-edit-images',
  templateUrl: './edit-images.component.html',
  styleUrls: ['./edit-images.component.scss']
})
export class EditImagesComponent implements OnInit {

  form:FormGroup;
  editResponse:any={};
  getResponse:any={};
  data:any={};
  id:any;
  imagePath:any;
  languages:any={};

  constructor(
    public fb: FormBuilder, 
    private service:ImagesService,
    private route: ActivatedRoute,
    private langService: LanguagesService
    ) {
    this.form = this.fb.group({
      title: this.data.title,
      caption: this.data.caption,
      image: null,
      langId: this.data.langId,
      isCarousel: this.data.isCarousel,
      createdBy: [''],
      updatedBy: ['']
    });
  }

  async ngOnInit() {

    await this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.languages = await this.langService.getAllLanguage();

    this.getResponse = await this.service.getImage(this.id);
       
    this.data = this.getResponse.data;
    this.imagePath = this.service.getImagePath()+this.data.imgName;
    this.form.patchValue({
      title: this.data.title,
      caption: this.data.caption,
      langId: this.data.langId,
      isCarousel: this.data.isCarousel
    });

  }
  uploadFile(event:Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity();
    this.imagePath = URL.createObjectURL(file);
  }
  
  async submitForm () {
    var formData: any = new FormData();
    formData.append('id',this.id);
    formData.append('title', this.form.get('title').value);
    formData.append('caption', this.form.get('caption').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('isCarousel', this.form.get('isCarousel').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    this.editResponse = await this.service.editImage(formData);

    console.log(formData);
  }
}
