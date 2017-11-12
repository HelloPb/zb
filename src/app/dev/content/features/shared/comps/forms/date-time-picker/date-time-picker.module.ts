import { SharedModule } from '../../../modules/shared/shared.module';
import { TimeRangePickerComponent } from './time-range-picker/time-range-picker.component';
import { NgModule } from '@angular/core';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TimeRangePickerComponent, TimePickerComponent],
  exports: [TimeRangePickerComponent],
  entryComponents: [TimeRangePickerComponent]
})
export class DateTimePickerModule { }
