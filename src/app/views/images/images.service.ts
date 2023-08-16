import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImagesService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllImage(){
    const url = 'https://localhost:7284/api/Image';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getImage(id:any){
    const url = 'https://localhost:7284/api/Image/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteImage(id:any){
    const url = 'https://localhost:7284/api/Image/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editImage(data:any){
    const url = 'https://localhost:7284/api/Image';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createImage(data:any){
    const url = 'https://localhost:7284/api/Image';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}