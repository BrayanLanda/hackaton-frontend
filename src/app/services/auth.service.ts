import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreateUser } from '../models/user';
import { LoginRequest, LoginResponse } from '../models/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  register(user: CreateUser): Observable<CreateUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CreateUser>(`${this.baseUrl}/register`, user, { headers });
  }

  // Método para iniciar sesión
  login(credentials: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(`${this.baseUrl}/inicio_sesion`, credentials, { headers });
  }
}
