import { SharedModule } from '../../../../common/modules/shared.module';
import { SpecificProductModule } from './add-edit-product/specific-product/specific-product.module';
import { StandardProductModule } from './add-edit-product/standard-product/standard-product.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    StandardProductModule,
    SpecificProductModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
