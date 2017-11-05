import { CountryCulture } from '../../../models/culture/country-culture';
import { Observable } from 'rxjs/Rx';
import { HttpWrap } from '../../http/http-wrap.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryCultureService {

  constructor(private http: HttpWrap) { }

  public get(): Observable<CountryCulture> {
    return this.http.get('').map(q => q.json());
  }

}
