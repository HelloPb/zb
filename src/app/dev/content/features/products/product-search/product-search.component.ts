import { UserCultureService } from '../../../../../common/services/culture/user-culture/user-culture.service';
import { CountryCultureService } from '../../../../../common/services/culture/country-culture/country-culture.service';
import { AppResponsiveService } from '../../../../../app-responsive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor
    (
    private countryCultureService: CountryCultureService,
    private userCultureService: UserCultureService,
    private rsv: AppResponsiveService
    ) {

  }

  ngOnInit() {
  }

}
