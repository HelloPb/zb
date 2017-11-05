import { UserCultureService } from '../../shared/services/culture/user-culture/user-culture.service';
import { CountryCultureService } from '../../shared/services/culture/country-culture/country-culture.service';
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
    private userCultureService: UserCultureService
    ) {

  }

  ngOnInit() {
  }

}
