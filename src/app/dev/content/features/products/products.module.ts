import { SpecificProductModule } from './add-edit-product/specific-product/specific-product.module';
import { StandardProductModule } from './add-edit-product/standard-product/standard-product.module';
import { ProfileProductsRoutingModule } from './products-routing.module';
import { ProfileProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductSearchResultComponent } from './product-search/product-search-result/product-search-result.component';
import { ProductSearchCriteriaComponent } from './product-search/product-search-criteria/product-search-criteria.component';

@NgModule({
  imports: [
    CommonModule,
    StandardProductModule,
    SpecificProductModule,
    ProfileProductsRoutingModule
  ],
  declarations: [ProfileProductsComponent]
})
export class ProfileProductsModule { }
