import { SharedModule } from '../../../../../../common/shared/shared.module';
import { DateTimePickerModule } from '../../../shared/comps/forms/date-time-picker/date-time-picker.module';
import { StandardProductRoutingModule } from './standard-product-routing.module';
import { StandardProductComponent } from './standard-product.component';
import { NgModule } from '@angular/core';
import { StandardProductDetailComponent } from './standard-product-detail/standard-product-detail.component';
// tslint:disable-next-line:max-line-length
import { StandardProductNavsComponent } from './standard-product-navs/standard-product-navs.component';
import { WeekDaysBussinessHoursComponent } from './standard-product-detail/week-days-bussiness-hours/week-days-bussiness-hours.component';

@NgModule({
  imports: [
    SharedModule,
    DateTimePickerModule,
    StandardProductRoutingModule
  ],
  declarations: [StandardProductComponent,
    StandardProductDetailComponent, StandardProductNavsComponent, WeekDaysBussinessHoursComponent]
})
export class StandardProductModule { }
