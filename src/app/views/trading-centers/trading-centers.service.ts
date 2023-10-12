import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TradingCentersService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getTradingCenters(){
    const url = 'https://localhost:7284/api/TradingCenter';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getTradingCenter(id:any){
    const url = 'https://localhost:7284/api/TradingCenter/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteTradingCenter(id:any){
    const url = 'https://localhost:7284/api/TradingCenter/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editTradingCenter(data:any){
    const url = 'https://localhost:7284/api/TradingCenter';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createTradingCenter(data:any){
    const url = 'https://localhost:7284/api/TradingCenter';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}