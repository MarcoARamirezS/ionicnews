import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  constructor( private http: HttpClient ) { }

  getTopHeadersLines() {
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business`, {
      params: {
        apiKey
      }
    }).pipe(
      // map( resp => resp.articles )
      map( ({ articles }) => articles)
    );
  }

  getTopHeadersLinesByCategory(category: string):Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`, {
      params: {
        apiKey
      }
    }).pipe(
      // map( resp => resp.articles )
      map( ({ articles }) => articles)
    );
  }
}
