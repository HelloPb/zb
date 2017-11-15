import { MyStoreService } from '../my-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-store-search-criteria',
  templateUrl: './my-store-search-criteria.component.html',
  styleUrls: ['./my-store-search-criteria.component.css']
})
export class MyStoreSearchCriteriaComponent implements OnInit {

  constructor(private mystore: MyStoreService) {
  }

  ngOnInit() {
    this.mystore.get();
  }

}
