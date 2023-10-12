import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TrainingDocsService } from '../training-docs.service';
import { LanguagesService } from '../../languages/languages.service';

@Component({
  selector: 'app-add-training-docs',
  templateUrl: './add-training-docs.component.html',
  styleUrls: ['./add-training-docs.component.scss']
})
export class AddTrainingDocsComponent implements OnInit {

  form:FormGroup;
  response:any;
  languages :any={};

  constructor(
      public fb: FormBuilder, 
      private http: HttpClient, 
      private service:TrainingDocsService,
      private langService:LanguagesService
    ) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      pdfFile: [null],
      createdBy: [''],
      updatedBy: [''],
      langId: [''],
      catagoryId: ['']
    });
  }

  async ngOnInit(){
    this.languages = await this.langService.getAllLanguage();
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
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    
    this.response = await this.service.createTrainingDoc(formData);

  }
}
