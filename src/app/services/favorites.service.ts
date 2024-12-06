import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // Método para obtener todos: User
  getAllFavorites(): Observable<Products[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Products[]>(`${this.baseUrl}/productos_aleatorios`, { headers });
}

}
