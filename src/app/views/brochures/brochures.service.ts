import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BrochuresService {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllBrochure(){
    const url = 'https://localhost:7284/api/Brochure';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getBrochure(id:any){
    const url = 'https://localhost:7284/api/Brochure/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteBrochure(id:any){
    const url = 'https://localhost:7284/api/Brochure/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editBrochure(data:any){
    const url = 'https://localhost:7284/api/Brochure';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createBrochure(data:any){
    const url = 'https://localhost:7284/api/Brochure';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getFilePath(){
    return 'https://localhost:7284/pdf/';
  }

}