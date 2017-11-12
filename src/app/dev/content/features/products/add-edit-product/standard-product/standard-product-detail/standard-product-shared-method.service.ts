import { TimePicker, TimeRangePicker } from '../../../../shared/models/date-time/time-picker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class StandardProductSharedMethodService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public timeRangeForm(range: TimeRangePicker): FormGroup {
    return this.formBuilder.group({
      id: range.id,
      from: this.timeForm(range.from),
      to: this.timeForm(range.to)
    });
  }

  public timeForm(time: TimePicker): FormGroup {
    return this.formBuilder.group({
      h: [{ value: time.h, disabled: true }, Validators.required],
      m: [{ value: time.m, disabled: true }, Validators.required]
    });
  }

}
