import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BoardOfDirectorsService } from '../board-of-directors.service';

@Component({
  selector: 'app-add-board-of-directors',
  templateUrl: './add-board-of-directors.component.html',
  styleUrls: ['./add-board-of-directors.component.scss']
})
export class AddBoardOfDirectorsComponent implements OnInit {

  imagePath:string="../../../assets/image/imgHolder.png";
  form:FormGroup;
  response:any;

  constructor(public fb: FormBuilder, private http: HttpClient, private service:BoardOfDirectorsService) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      image: [null],
      createdBy: [''],
      updatedBy: [''],
      langId: ['']
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
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('imgFile', this.form.get('image').value);
    formData.append('langId', this.form.get('langId').value);
    formData.append('createdBy', "hadera");
    formData.append('updatedBy', "haderaq");
    

    this.response = await this.service.createBoardOfDirector(formData);

  }
}
