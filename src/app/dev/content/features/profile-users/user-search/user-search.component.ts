import { AppResponsiveService } from '../../../../../app-responsive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private rsv: AppResponsiveService
  ) { }

  ngOnInit() {
  }
}
