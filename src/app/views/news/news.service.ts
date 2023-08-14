import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllNews(){
    const url = 'https://localhost:7284/api/News';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getNews(id:any){
    const url = 'https://localhost:7284/api/News/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteNews(id:any){
    const url = 'https://localhost:7284/api/News/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editNews(data:any){
    const url = 'https://localhost:7284/api/News';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createNews(data:any){
    const url = 'https://localhost:7284/api/News';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}