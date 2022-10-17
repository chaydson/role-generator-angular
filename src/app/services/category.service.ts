import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest, Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly api = 'http://localhost:8080/api';

  /* CONFIGURAÇÃO DO HEADER */
  private readonly header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}/categories`);
  }

  addCategory(category: AddCategoryRequest): Observable<AddCategoryRequest> {
    return this.http.post<AddCategoryRequest>(`${this.api}/category`, category, {headers: this.header});
  }

}
