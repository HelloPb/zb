import { HttpClient } from '@angular/common/http';
import { CountryCulture } from '../../../models/culture/country-culture';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryCultureService {

  constructor(private http: HttpClient) { }

  public get(): Observable<CountryCulture> {
    return this.http.get<CountryCulture>('');
  }

}
