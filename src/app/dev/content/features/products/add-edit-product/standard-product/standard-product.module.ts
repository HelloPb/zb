import { ReactiveFormsModule } from '@angular/forms';
import { StandardProductRoutingModule } from './standard-product-routing.module';
import { StandardProductComponent } from './standard-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardProductDetailComponent } from './standard-product-detail/standard-product-detail.component';
// tslint:disable-next-line:max-line-length
import { StandardProductNavsComponent } from './standard-product-navs/standard-product-navs.component';
import { WeekDaysBussinessHoursComponent } from './standard-product-detail/week-days-bussiness-hours/week-days-bussiness-hours.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StandardProductRoutingModule
  ],
  declarations: [StandardProductComponent,
    StandardProductDetailComponent, StandardProductNavsComponent, WeekDaysBussinessHoursComponent]
})
export class StandardProductModule { }
