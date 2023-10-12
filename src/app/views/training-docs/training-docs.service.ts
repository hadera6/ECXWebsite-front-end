import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TrainingDocsService {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  data:any;

  async getAllTrainingDoc(){
    const url = 'https://localhost:7284/api/TrainingDoc';
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async getTrainingDoc(id:any){
    const url = 'https://localhost:7284/api/TrainingDoc/'+id;
    const response = await firstValueFrom(this.httpClient.get(url));
    return response;
  }
  async deleteTrainingDoc(id:any){
    const url = 'https://localhost:7284/api/TrainingDoc/'+id;
    const response = await firstValueFrom(this.httpClient.delete(url));
    return response;
  }
  async editTrainingDoc(data:any){
    const url = 'https://localhost:7284/api/TrainingDoc';
    const response = await firstValueFrom(this.httpClient.put(url, data));
    return response;
  }
  async createTrainingDoc(data:any){
    const url = 'https://localhost:7284/api/TrainingDoc';
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  getFilePath(){
    return 'https://localhost:7284/pdf/';
  }

}