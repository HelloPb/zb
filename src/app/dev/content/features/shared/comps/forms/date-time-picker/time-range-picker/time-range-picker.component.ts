import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimeRangePicker } from '../../../../models/date-time/time-picker';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-time-range-picker',
  templateUrl: './time-range-picker.component.html',
  styleUrls: ['./time-range-picker.component.css']
})

export class TimeRangePickerComponent {

  private formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TimeRangePickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formGroup = data.formGroup;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
