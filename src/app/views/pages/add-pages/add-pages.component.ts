import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-add-pages',
  templateUrl: './add-pages.component.html',
  styleUrls: ['./add-pages.component.scss']
})
export class AddPagesComponent implements OnInit {

  imagePath:string="../../../assets/image/imgHolder.png";
  form:FormGroup;
  response:any;

  constructor(public fb: FormBuilder, private http: HttpClient, private service:PagesService) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      image: [null],
      createdBy: [''],
      updatedBy: [''],
      langId: [''],
      catagoryId: ['']
    });
  }

  ngOnInit(): void {
    
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
    formData.append('description', this.form.get('description').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('catagoryId', this.form.get('catagoryId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    

    this.response = await this.service.createPage(formData);

  }
}
