import { SharedModule } from '../../../../common/shared/shared.module';
import { SpecificProductModule } from './add-edit-product/specific-product/specific-product.module';
import { StandardProductModule } from './add-edit-product/standard-product/standard-product.module';
import { ProfileProductsRoutingModule } from './products-routing.module';
import { ProfileProductsComponent } from './products.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    StandardProductModule,
    SpecificProductModule,
    ProfileProductsRoutingModule
  ],
  declarations: [ProfileProductsComponent]
})
export class ProfileProductsModule { }
