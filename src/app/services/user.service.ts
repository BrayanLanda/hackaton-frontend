import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Users{
  id_user: number;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  mobile: string;
  birth_date: Date;
  email: string;
  password: string;
  registration_date: string;
}

export interface CreateUser{
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  mobile: string;
  birth_date: Date;
  email: string;
  password: string;
}


@Injectable()
export class UserService {

  private apiUrl = "https://e372-2800-e2-7080-1d1e-24ce-7bc5-998a-de12.ngrok-free.app/register";

  constructor(private http: HttpClient) { }

  // Método para crear: User
  createUser(user: CreateUser): Observable<CreateUser> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<CreateUser>(this.apiUrl, user, { headers });
  }

}


