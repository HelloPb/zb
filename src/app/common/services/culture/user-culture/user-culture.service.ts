import { UserCulture } from '../../../../dev/content/features/shared/models/culture/user-culture';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserCultureService {

  constructor(private http: HttpClient) { }

  public get(): Observable<UserCulture> {
    return this.http.get<UserCulture>('');
  }

}
