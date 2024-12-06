import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // Método para obtener todos: User
  getAllProducts(): Observable<Products[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Products[]>(`${this.baseUrl}/products`, { headers });
  }


}
