import { UserCulture } from '../../../models/culture/user-culture';
import { Observable } from 'rxjs/Rx';
import { HttpWrap } from '../../http/http-wrap.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserCultureService {

  constructor(private http: HttpWrap) { }

  public get(): Observable<UserCulture> {
    return this.http.get('').map(q => q.json());
  }

}
