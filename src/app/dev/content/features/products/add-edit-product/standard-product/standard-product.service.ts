import { StandardProduct } from '../../../shared/models/product/standard-product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StandardProductService {

  public products: Observable<StandardProduct[]>;

  constructor(private http: HttpClient) {
    this.products = Observable.create();
  }

  public get(): Observable<StandardProduct[]> {
    this.products =  this.http.get<StandardProduct[]>('api/sp');
    return this.products;
  }

  public getById(id: string): Observable<StandardProduct> {
    return this.http.get<StandardProduct>(`api/sp/${id}`);
  }

  public post(body: any): Observable<string> {
    return this.http.post<string>(`api/sp`, body);
  }

  public put(id: string, body: any): Observable<string> {
    return this.http.put<string>(`api/sp/${id}`, body);
  }

  public delete(id: string): Observable<string> {
    return this.http.delete<string>(`api/sp/${id}`);
  }
}
