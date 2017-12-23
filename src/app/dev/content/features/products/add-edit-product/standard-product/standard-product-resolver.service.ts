import { StandardProductService } from './standard-product.service';
import { StandardProduct } from '../../../shared/models/product/standard-product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class StandardProductResolver implements Resolve<StandardProduct> {
  constructor(private sp: StandardProductService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StandardProduct> {
    let id = route.paramMap.get('id');

    if (id === 'standard') {
      id = undefined;
    }


    if (id ) {
      return this.sp.getById(id).take(1).map(product => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['../search']);
          return null;
        }
      });

    } else {

      const sp: StandardProduct = new StandardProduct();
      sp.sun = this.setDefaultBussinessHoursForWeekDay();
      sp.mon = this.setDefaultBussinessHoursForWeekDay();
      sp.tue = this.setDefaultBussinessHoursForWeekDay();
      sp.wed = this.setDefaultBussinessHoursForWeekDay();
      sp.thu = this.setDefaultBussinessHoursForWeekDay();
      sp.fri = this.setDefaultBussinessHoursForWeekDay();
      sp.sat = this.setDefaultBussinessHoursForWeekDay();
      return Observable.create(s => {
        s.next(sp);
        s.complete();
      });
    }
  }

  private setDefaultBussinessHoursForWeekDay(): any {
    return [
      { id: 1, from: { h: '09', m: '00' }, to: { h: '05', m: '00' } }
    ];
  }

}
