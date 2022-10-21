import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/auth';
import { TokenResponse } from '../models/token';

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
    return this.http.post<TokenResponse>(`${this.api}/login`, body, {headers: this.header});
  }

  setToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  clear(){
    localStorage.clear();
  }
}
