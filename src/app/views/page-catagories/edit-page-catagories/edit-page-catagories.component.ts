import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PageCatagoriesService } from '../page-catagories.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import {  } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-page-catagories',
  templateUrl: './edit-page-catagories.component.html',
  styleUrls: ['./edit-page-catagories.component.scss']
})
export class EditPageCatagoriesComponent implements OnInit {

  form:FormGroup;
  editResponse:any={};
  getResponse:any={};
  data:any={};
  id:any;
  imagePath:any;

  constructor(
    public fb: FormBuilder, 
    private service:PageCatagoriesService,
    private route: ActivatedRoute
    ) {
    this.form = this.fb.group({
      title: this.data.title,
      description: this.data.description,
      image: null,
      langId: this.data.langId,
      createdBy: [''],
      updatedBy: ['']
    });
  }

  async ngOnInit() {

    await this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    console.log(this.id);

    this.getResponse = await this.service.getPageCatagory(this.id);
       
    this.data = this.getResponse.data;
    this.imagePath = this.service.getImagePath()+this.data.imgName;
    this.form.patchValue({
      title: this.data.title,
      description: this.data.description,
      langId: this.data.langId,
      catagoryId: this.data.catagoryId
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
    formData.append('description', this.form.get('description').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    this.editResponse = await this.service.editPageCatagory(formData);

    console.log(formData);
  }
}
