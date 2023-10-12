import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllVideo(){
    const url = 'https://localhost:7284/api/Video';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getVideo(id:any){
    const url = 'https://localhost:7284/api/Video/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteVideo(id:any){
    const url = 'https://localhost:7284/api/Video/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editVideo(data:any){
    const url = 'https://localhost:7284/api/Video';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createVideo(data:any){
    const url = 'https://localhost:7284/api/Video';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getFilePath(){
    return 'https://localhost:7284/video/';
  }

}