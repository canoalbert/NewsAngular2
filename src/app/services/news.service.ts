import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Section} from "../interface/section.interface";
import {News} from "../interface/news.interface";


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';
  private apiUrl2 = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  getAllSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.apiUrl2}$sections`);
  }
  getSectionById(_id: string): Observable<Section> {
    return this.http.get<Section>(`${this.apiUrl2}sections/${_id}`);
  }

  getNewsById(newsId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${newsId}`);
  }

  getNewsBySection(sectionName: string): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/section/${sectionName}`);
  }

  addNews(newsData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, newsData);
  }

  updateNews(newsId: string, newsData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${newsId}`, newsData);
  }

  deleteNews(newsId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${newsId}`);
  }

  formatDate(date: Date): string {
    const dia = date.getDate().toString().padStart(2, "0");
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const año = date.getFullYear();
    const hora = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");

    return `${dia}/${mes}/${año}  ${hora}:${minutos}`;
  }
}
