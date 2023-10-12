import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContractFilesService {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllContractFile(){
    const url = 'https://localhost:7284/api/ContractFile';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getContractFile(id:any){
    const url = 'https://localhost:7284/api/ContractFile/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteContractFile(id:any){
    const url = 'https://localhost:7284/api/ContractFile/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editContractFile(data:any){
    const url = 'https://localhost:7284/api/ContractFile';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createContractFile(data:any){
    const url = 'https://localhost:7284/api/ContractFile';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getFilePath(){
    return 'https://localhost:7284/pdf/';
  }

}