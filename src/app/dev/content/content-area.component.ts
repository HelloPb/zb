import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import * as actual from 'actual';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

  navmode = 'over';
  navopened = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    if (actual('width', 'px') >= 1200) {

      this.navmode = 'side';
      this.navopened = true;

    } else {

      this.navmode = 'over';
      this.navopened = false;

    }
  }

  ngOnInit() {
    this.onResize(null);
  }
}
