import { SharedModule } from '../../../../../common/shared/shared.module';
import { ProductSearchComponent } from './product-search.component';
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { ProductSearchCriteriaComponent } from './product-search-criteria/product-search-criteria.component';
import { NgModule } from '@angular/core';
import { ProductSearchRoutingModule } from './product-search-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductSearchRoutingModule
  ],
  declarations: [ProductSearchComponent, ProductSearchResultComponent, ProductSearchCriteriaComponent]
})
export class ProductSearchModule { }
