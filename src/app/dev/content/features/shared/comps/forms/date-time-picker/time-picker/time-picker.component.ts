import { Util } from '../../../../utils/util';
import { RegexParser } from '../../../../utils/regex-parser';
import { TimePicker } from '../../../../models/date-time/time-picker';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  @Input() public time: FormGroup;

  private subscription: Subscription[] = [];
  constructor() { }

  public ngOnInit(): void {
  }

  private addHour(hour: number): void {
    if (+hour < 24) {
      hour = +hour + 1;
      this.time.patchValue({ h: hour });
    }
  }

  private reduceHour(hour: number): void {
    if (+hour > 0) {
      hour = +hour - 1;
      this.time.patchValue({ h: hour });
    }
  }

  private addMinute(minute: number): void {
    if (+minute < 59) {
      minute = +minute + 1;
      this.time.patchValue({ m: minute });
    }
  }

  private reduceMinute(minute: number): void {
    if (+minute > 0) {
      minute = +minute - 1;
      this.time.patchValue({ m: minute });
    }
  }

}
