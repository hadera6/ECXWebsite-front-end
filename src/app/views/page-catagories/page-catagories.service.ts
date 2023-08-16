import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PageCatagoriesService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllPageCatagory(){
    const url = 'https://localhost:7284/api/PageCatagory';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getPageCatagory(id:any){
    const url = 'https://localhost:7284/api/PageCatagory/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deletePageCatagory(id:any){
    const url = 'https://localhost:7284/api/PageCatagory/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editPageCatagory(data:any){
    const url = 'https://localhost:7284/api/PageCatagory';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createPageCatagory(data:any){
    const url = 'https://localhost:7284/api/PageCatagory';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}