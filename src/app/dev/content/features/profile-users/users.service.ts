import { HttpWrap } from '../shared/services/http/http-wrap.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileUsersService {

  constructor(private http: HttpWrap) { }

  get() {
    return this.http.get('').map(q => q.json());
  }

  getById(id: string) {
    return this.http.get('').map(q => q.json());
  }

}
