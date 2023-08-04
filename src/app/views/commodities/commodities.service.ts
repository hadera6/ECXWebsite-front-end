import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CommoditiesService {


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  getCommodities(){
    const url = 'https://localhost:7284/api/Commodity';
    return this.httpClient.get(url);
  }
  getCommodity(id:any){
    const url = 'https://localhost:7284/api/Commodity/'+id;
    return this.httpClient.get(url);
  }
  deleteCommodity(id:any){
    const url = 'https://localhost:7284/api/Commodity/'+id;
    return this.httpClient.delete(url);
  }
  editCommodity(data:any){
    const url = 'https://localhost:7284/api/Commodity';
    return this.httpClient.put(url, data);
  }
  createCommodity(data:any){
    const url = 'https://localhost:7284/api/Commodity';
    return this.httpClient.post(url, data);
  }
  getImagePath(){
    return 'https://localhost:7284/image/';
  }

}