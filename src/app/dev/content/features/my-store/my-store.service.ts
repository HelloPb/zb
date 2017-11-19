import { StandardProduct } from '../shared/models/product/standard-product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyStoreService {

  public products: Observable<StandardProduct[]>;

  constructor(private http: HttpClient) {

    this.products = Observable.create();
  }

  public get(): Observable<StandardProduct[]> {
    this.products = this.http.get<StandardProduct[]>('api/mystore');
    return this.products;
  }
}
