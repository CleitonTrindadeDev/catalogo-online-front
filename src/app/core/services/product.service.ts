import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductData } from '../../models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private env = environment.apiUrl;

  constructor(private http: HttpClient) { }



  getProducts(route: string, paramsfilter?: any): Observable<ProductData> {

    let params = new HttpParams();

    if (paramsfilter.category) {
      params = params.set('category', paramsfilter.category);
    }

    if (paramsfilter.product) {
      params = params.set('product', paramsfilter.product);
    }

    return this.http.get<ProductData>(`${this.env}/${route}`, { params });
  }


}
