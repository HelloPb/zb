import {
    AngularMaterialDesignModule,
} from '../../../../../../common/angular-material-design/angular-material-design.module';
import { SpecificProductRoutingModule } from './specific-product-routing.module';
import { SpecificProductComponent } from './specific-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialDesignModule,
    SpecificProductRoutingModule
  ],
  declarations: [SpecificProductComponent]
})
export class SpecificProductModule { }
