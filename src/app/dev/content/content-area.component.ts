import { AppResponsiveService } from '../../app-responsive.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class ContentAreaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rsv: AppResponsiveService
  ) { }

  ngOnInit() {
    this.rsv.setSideNav(1200);
  }
}
