import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResearchsService {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllResearch(){
    const url = 'https://localhost:7284/api/Research';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getResearch(id:any){
    const url = 'https://localhost:7284/api/Research/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteResearch(id:any){
    const url = 'https://localhost:7284/api/Research/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editResearch(data:any){
    const url = 'https://localhost:7284/api/Research';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createResearch(data:any){
    const url = 'https://localhost:7284/api/Research';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getFilePath(){
    return 'https://localhost:7284/pdf/';
  }

}