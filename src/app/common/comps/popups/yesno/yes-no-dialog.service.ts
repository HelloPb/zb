import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YesNoDialogService {

  constructor() { }

  confirm(message: string): Observable<boolean> {

    const truthy = new Observable<boolean>(x => { x.next(true); x.complete(); });

    return truthy;
  }
}
