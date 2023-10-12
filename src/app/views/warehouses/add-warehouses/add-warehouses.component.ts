import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WarehousesService } from '../warehouses.service';
import { LanguagesService } from '../../languages/languages.service';


@Component({
  selector: 'app-add-warehouses',
  templateUrl: './add-warehouses.component.html',
  styleUrls: ['./add-warehouses.component.scss']
})
export class AddWarehousesComponent implements OnInit {

  imagePath:string="../../../assets/image/imgHolder.png";
  form:FormGroup;
  response:any={};
  languages:any={};

  constructor(
    public fb: FormBuilder, 
    private http: HttpClient, 
    private service:WarehousesService,
    private langService:LanguagesService
  ) {
  this.form = this.fb.group({
    name: [''],
    description: [''],
    latitude:[''],
    longitude:[''],
    capacity:[''],
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
    formData.append('latitude', this.form.get('latitude').value);
    formData.append('longitude', this.form.get('longitude').value);
    formData.append('capacity', this.form.get('capacity').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    

    this.response = await this.service.createWarehouse(formData);

  }
}
