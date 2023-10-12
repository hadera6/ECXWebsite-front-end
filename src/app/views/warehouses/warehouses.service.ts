import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WarehousesService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getWarehouses(){
    const url = 'https://localhost:7284/api/Warehouse';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getWarehouse(id:any){
    const url = 'https://localhost:7284/api/Warehouse/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteWarehouse(id:any){
    const url = 'https://localhost:7284/api/Warehouse/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editWarehouse(data:any){
    const url = 'https://localhost:7284/api/Warehouse';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createWarehouse(data:any){
    const url = 'https://localhost:7284/api/Warehouse';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}