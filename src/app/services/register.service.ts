import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly api = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  registerUser(register: Register){
    return this.http.post<Register>(`${this.api}/user`, register);
  }
}
