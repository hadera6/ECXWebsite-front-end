import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommoditiesService } from '../commodities.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import {  } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-commodities',
  templateUrl: './edit-commodities.component.html',
  styleUrls: ['./edit-commodities.component.scss']
})
export class EditCommoditiesComponent implements OnInit {

  form:FormGroup;
  data:any={};
  id:any;
  imagePath:any;

  constructor(
    public fb: FormBuilder, 
    private http: HttpClient, 
    private service:CommoditiesService,
    private route: ActivatedRoute
    ) {
    this.form = this.fb.group({
      name: this.data.name,
      description: this.data.description,
      image: null,
      createdBy: [''],
      updatedBy: [''],
    });
  }

  async ngOnInit() {

    await this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });
    await this.service.getCommodity(this.id)
        .subscribe(response => {
          this.data = response;
          this.imagePath = this.service.getImagePath()+this.data.img;
          this.form.patchValue({
            name: this.data.name,
            description: this.data.description
          });
          console.log(response);
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
    formData.append('imgFile', this.form.get('image').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    await this.service.editCommodity(formData).subscribe(
      (response) => console.log(response),
      (error) => {
        console.log(error.message);
      }
    );

    console.log(formData)
  }
}
