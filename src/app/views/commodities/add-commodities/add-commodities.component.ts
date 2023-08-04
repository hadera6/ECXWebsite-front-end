import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommoditiesService } from '../commodities.service';

@Component({
  selector: 'app-add-commodities',
  templateUrl: './add-commodities.component.html',
  styleUrls: ['./add-commodities.component.scss']
})
export class AddCommoditiesComponent implements OnInit {

  form:FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient, private service:CommoditiesService) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      image: [null],
      createdBy: [''],
      updatedBy: [''],
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
  }
  
  async submitForm () {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");

    await this.service.createCommodity(formData).subscribe(
      (response) => console.log(response),
      (error) => {
        console.log(error.message);
      }
    );
  }
}
