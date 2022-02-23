import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  constructor( private http: HttpClient ) { }

  /*
  getTopHeadersLines() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
  }
  */
  getTopHeadersLines() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business`, {
      params: {
        apiKey
      }
    });
  }
}
