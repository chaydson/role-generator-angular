import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddOptionRequest, Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private readonly api = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getOptions(): Observable<Option[]> {
    return this.http.get<Option[]>(`${this.api}/options`);
  }

  addOption(category: AddOptionRequest): Observable<AddOptionRequest> {
    return this.http.post<AddOptionRequest>(`${this.api}/option`, category);
  }
}
