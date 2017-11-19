import { SharedModule } from '../../../../../../common/modules/shared.module';
import { SpecificProductRoutingModule } from './specific-product-routing.module';
import { SpecificProductComponent } from './specific-product.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    SpecificProductRoutingModule
  ],
  declarations: [SpecificProductComponent]
})
export class SpecificProductModule { }
