import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductData } from '../../models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base = environment.apiUrl + '/produtos';

  constructor(private http: HttpClient) { }

  list(): Observable<ProductData> {
    return this.http.get<ProductData>(this.base);
  }

  getById(id: number): Observable<ProductData> {
    return this.http.get<ProductData>(`${this.base}/${id}`);
  }
}
