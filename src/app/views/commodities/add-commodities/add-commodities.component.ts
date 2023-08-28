import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommoditiesService } from '../commodities.service';
import { LanguagesService } from '../../languages/languages.service';


@Component({
  selector: 'app-add-commodities',
  templateUrl: './add-commodities.component.html',
  styleUrls: ['./add-commodities.component.scss']
})
export class AddCommoditiesComponent implements OnInit {

  imagePath:string="../../../assets/image/imgHolder.png";
  form:FormGroup;
  response:any={};
  languages:any={};

  constructor(
    public fb: FormBuilder, 
    private http: HttpClient, 
    private service:CommoditiesService,
    private langService:LanguagesService
  ) {
  this.form = this.fb.group({
    name: [''],
    description: [''],
    image: [null],
    createdBy: [''],
    updatedBy: [''],
    langId: ['']
    });
  }

  async ngOnInit(){
    this.languages = (await this.langService.getAllLanguage());
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
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    

    this.response = await this.service.createCommodity(formData);

  }
}
