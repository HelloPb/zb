import { SpecificProductRoutingModule } from './specific-product-routing.module';
import { SpecificProductComponent } from './specific-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SpecificProductRoutingModule
  ],
  declarations: [SpecificProductComponent]
})
export class SpecificProductModule { }
