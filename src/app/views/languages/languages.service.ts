import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguagesService {
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute
    ) { }

    async getAllLanguage(){
      const url = 'https://localhost:7284/api/Language';
      const response = await firstValueFrom(this.httpClient.get(url));
      return response;
    }
}