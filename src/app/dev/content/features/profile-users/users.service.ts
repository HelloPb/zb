import { UserProfile } from '../shared/models/users/user-profile';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileUsersService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<UserProfile[]>('');
  }

  getById(id: string) {
    return this.http.get<UserProfile>('');
  }

}
