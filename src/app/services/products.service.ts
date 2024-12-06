import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Products{
  name: string;
  reference: string;
  price: number;
  stock: number;
  brand: string;
  size: string;
  image: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  // Método para obtener todos: User
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl)
}


}
