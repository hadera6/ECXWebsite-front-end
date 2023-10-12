import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementsService {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllAnnouncement(){
    const url = 'https://localhost:7284/api/Announcement';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getAnnouncement(id:any){
    const url = 'https://localhost:7284/api/Announcement/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteAnnouncement(id:any){
    const url = 'https://localhost:7284/api/Announcement/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editAnnouncement(data:any){
    const url = 'https://localhost:7284/api/Announcement';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createAnnouncement(data:any){
    const url = 'https://localhost:7284/api/Announcement';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getFilePath(){
    return 'https://localhost:7284/pdf/';
  }

}