import { MyStoreService } from '../my-store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-store-search-result',
  templateUrl: './my-store-search-result.component.html',
  styleUrls: ['./my-store-search-result.component.css']
})
export class MyStoreSearchResultComponent implements OnInit {

  constructor(private mystore: MyStoreService) {
  }

  ngOnInit() {
  }

}
