import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../news.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import {  } from '@angular/platform-browser';

import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

import 'quill-emoji/dist/quill-emoji.js';

import Quill from 'quill'
import BlotFormatter from 'quill-blot-formatter';
import { LanguagesService } from '../../languages/languages.service';

Quill.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  form:FormGroup;
  editResponse:any={};
  getResponse:any={};
  data:any={};
  id:any;
  imagePath:any;
  languages:any={};

  blured = false
  focused = false
  html =""
  modules = {}

  constructor(
    public fb: FormBuilder, 
    private service:NewsService,
    private route: ActivatedRoute,
    private langService : LanguagesService
    ) {
    this.form = this.fb.group({
      title: this.data.title,
      description: this.data.description,
      image: null,
      langId: this.data.langId,
      expDate: this.data.expDate,
      source: this.data.source,
      createdBy: [''],
      updatedBy: ['']
    });

    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': false,
      'emoji-toolbar': true,
      blotFormatter: {
        // empty object for default behaviour.
      },
      'toolbar': {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video'],                         // link and image, video
          ['emoji'],
        ],
        handlers: { 'emoji': function () { } },
      }
    }
  }

  async ngOnInit() {

    await this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

     this.languages = await this.langService.getAllLanguage();

    this.getResponse = await this.service.getNews(this.id);
       
    this.data = this.getResponse.data;
    this.imagePath = this.service.getImagePath()+this.data.imgName;
    this.form.patchValue({
      title: this.data.title,
      description: this.data.description,
      langId: this.data.langId,
      expDate: this.data.expDate,
      source: this.data.source
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
    formData.append('expDate', this.form.get('expDate').value);
    formData.append('source', this.form.get('source').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    this.editResponse = await this.service.editNews(formData);

    console.log(formData);
  }
}
