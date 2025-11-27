import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base = environment.apiUrl + '/produtos';

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.base}/${id}`);
  }
}
