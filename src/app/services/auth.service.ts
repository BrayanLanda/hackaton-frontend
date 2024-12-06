import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://e372-2800-e2-7080-1d1e-24ce-7bc5-998a-de12.ngrok-free.app/inicio_sesion";

  constructor(private http: HttpClient) { }

   // Método para auth: Login
  login(credentials: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(this.apiUrl, credentials, { headers });
  }





}
