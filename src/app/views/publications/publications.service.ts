import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PublicationsService {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllPublication(){
    const url = 'https://localhost:7284/api/Publication';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getPublication(id:any){
    const url = 'https://localhost:7284/api/Publication/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deletePublication(id:any){
    const url = 'https://localhost:7284/api/Publication/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editPublication(data:any){
    const url = 'https://localhost:7284/api/Publication';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createPublication(data:any){
    const url = 'https://localhost:7284/api/Publication';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getFilePath(){
    return 'https://localhost:7284/pdf/';
  }

}