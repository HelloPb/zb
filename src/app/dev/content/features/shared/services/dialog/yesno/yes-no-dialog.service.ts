import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class YesNoDialogService {

  constructor() { }

  confirm(message: string): Observable<boolean> {

    const truthy = new Observable<boolean>(x => { x.next(true); x.complete(); });

    return truthy;
  }
}
