import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BoardOfDirectorsService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getBoardOfDirectors(){
    const url = 'https://localhost:7284/api/BoardOfDirector';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getBoardOfDirector(id:any){
    const url = 'https://localhost:7284/api/BoardOfDirector/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteBoardOfDirector(id:any){
    const url = 'https://localhost:7284/api/BoardOfDirector/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editBoardOfDirector(data:any){
    const url = 'https://localhost:7284/api/BoardOfDirector';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createBoardOfDirector(data:any){
    const url = 'https://localhost:7284/api/BoardOfDirector';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}