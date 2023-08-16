import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PagesService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllPage(){
    const url = 'https://localhost:7284/api/Page';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getPage(id:any){
    const url = 'https://localhost:7284/api/Page/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deletePage(id:any){
    const url = 'https://localhost:7284/api/Page/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editPage(data:any){
    const url = 'https://localhost:7284/api/Page';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createPage(data:any){
    const url = 'https://localhost:7284/api/Page';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}