import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ImagesService } from '../images.service';
import { LanguagesService } from '../../languages/languages.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {

  imagePath:string="../../../assets/image/imgHolder.png";
  form:FormGroup;
  response:any;
  languages:any={};

  constructor(
    public fb: FormBuilder, 
    private http: HttpClient, 
    private service:ImagesService,
    private langService:LanguagesService
    ) {
    this.form = this.fb.group({
      title: [''],
      caption: [''],
      image: [null],
      createdBy: [''],
      updatedBy: [''],
      langId: [''],
      isCarousel: null
    });
  }

  async ngOnInit() {
    this.languages = await this.langService.getAllLanguage();
    
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
    formData.append('title', this.form.get('title').value);
    formData.append('caption', this.form.get('caption').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('isCarousel', this.form.get('isCarousel').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    

    this.response = await this.service.createImage(formData);

  }
}
