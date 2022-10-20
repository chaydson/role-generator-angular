import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api = 'http://localhost:8080';
  private readonly header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest) {
    const body = new URLSearchParams();
    body.set('username', loginRequest.username);
    body.set('password', loginRequest.password);
    return this.http.post<LoginRequest>(`${this.api}/login`, body, {headers: this.header});
  }
}
