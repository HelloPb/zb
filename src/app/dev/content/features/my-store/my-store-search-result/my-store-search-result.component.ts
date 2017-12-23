import { ActivatedRoute, Router } from '@angular/router';
import { MyStoreService } from '../my-store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-store-search-result',
  templateUrl: './my-store-search-result.component.html',
  styleUrls: ['./my-store-search-result.component.css']
})
export class MyStoreSearchResultComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mystore: MyStoreService) {
  }

  public edit(id: number): void {
    this.gotoEditProduct(id);
  }

  private gotoEditProduct(id: number): void {
    this.router.navigate([`/content/products/standard/${id}`]);
  }

  ngOnInit() {
  }

}
