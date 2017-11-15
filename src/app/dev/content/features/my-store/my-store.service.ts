import { StandardProduct } from '../shared/models/product/standard-product';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyStoreService {

  public products: Observable<StandardProduct[]>;

  constructor(private http: HttpClient) { }

  public get(): Observable<StandardProduct[]> {
    return this.http.get<StandardProduct[]>('');
  }
}
