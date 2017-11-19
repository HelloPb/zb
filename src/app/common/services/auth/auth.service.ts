import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  constructor() { }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  public logout(): void {
    this.isLoggedIn = false;
  }

  public getAuthorizationHeader(): string {
    return '';
  }
}
