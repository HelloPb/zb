import { Observable } from 'rxjs/Observable';
import { UserProfile } from '../../shared/models/users/user-profile';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../../users/users.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ManageUsersResolverService implements Resolve<UserProfile> {
  constructor(private us: UsersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile> {
    const id = route.paramMap.get('id');

    return this.us.getById(id).pipe(user => {
      if (user) {
        return user;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });
  }
}
