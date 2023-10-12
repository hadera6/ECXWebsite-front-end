import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { VideosService } from '../videos.service';
import { LanguagesService } from '../../languages/languages.service';

@Component({
  selector: 'app-add-videos',
  templateUrl: './add-videos.component.html',
  styleUrls: ['./add-videos.component.scss']
})
export class AddVideosComponent implements OnInit {

  form:FormGroup;
  response:any;
  languages :any={};

  constructor(
      public fb: FormBuilder, 
      private http: HttpClient, 
      private service:VideosService,
      private langService:LanguagesService
    ) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      videoFile: [null],
      createdBy: [''],
      updatedBy: [''],
      langId: ['']
    });
  }

  async ngOnInit(){
    this.languages = await this.langService.getAllLanguage();
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
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('videoFile', this.form.get('videoFile').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    
    this.response = await this.service.createVideo(formData);

  }
}
