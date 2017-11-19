import { CountryCulture } from '../../../../dev/content/features/shared/models/culture/country-culture';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryCultureService {

  constructor(private http: HttpClient) { }

  public get(): Observable<CountryCulture> {
    return this.http.get<CountryCulture>('');
  }

}
