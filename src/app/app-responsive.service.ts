import { Injectable } from '@angular/core';
import * as actual from 'actual';

@Injectable()
export class AppResponsiveService {

  public mode: string;
  public opened: boolean;

  constructor() {
    this.mode = 'over';
    this.opened = false;
  }

  public setSideNav(width: number): void {

    if (actual('width', 'px') >= width) {

      this.mode = 'side';
      this.opened = true;

    } else {

      this.mode = 'over';
      this.opened = false;

    }
  }

  public showSideNav(): void {
    this.mode = 'over';
    this.opened = true;
  }

  public hideSideNav(): void {

    this.mode = 'over';
    this.opened = false;
  }

}

