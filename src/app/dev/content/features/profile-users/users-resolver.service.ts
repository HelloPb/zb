import { UserProfile } from '../shared/models/users/user-profile';
import { ProfileUsersService } from './users.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { HttpWrap } from '../shared/services/http/http-wrap.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileUsersResolverService implements Resolve<UserProfile> {
  constructor(private us: ProfileUsersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile> {
    const id = route.paramMap.get('id');

    return this.us.getById(id).take(1).map(user => {
      if (user) {
        return user;
      } else { // id not found
        this.router.navigate(['/add']);
        return null;
      }
    });
  }
}
