import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommoditiesService } from '../commodities.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { LanguagesService } from '../../languages/languages.service';

@Component({
  selector: 'app-edit-commodities',
  templateUrl: './edit-commodities.component.html',
  styleUrls: ['./edit-commodities.component.scss']
})
export class EditCommoditiesComponent implements OnInit {

  form:FormGroup;
  editResponse:any={};
  getResponse:any={};
  data:any={};
  id:any;
  imagePath:any;
  languages:any={};

  constructor(
    public fb: FormBuilder, 
    private service:CommoditiesService,
    private route: ActivatedRoute,
    private langService: LanguagesService
    ) {
    this.form = this.fb.group({
      name: this.data.name,
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

    this.languages = await this.langService.getAllLanguage();

    this.getResponse = await this.service.getCommodity(this.id);
       
    this.data = this.getResponse.data;
    this.imagePath = this.service.getImagePath()+this.data.imgName;
    this.form.patchValue({
      name: this.data.name,
      description: this.data.description,
      langId: this.data.langId
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
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    this.editResponse = await this.service.editCommodity(formData);

    console.log(formData);
  }
}
