import { ValidationService } from '../../../../shared/services/validation/validation.service';
import { TimePickerRange } from '../../../../shared/models/date-time/time-picker';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-product-detail',
  templateUrl: './standard-product-detail.component.html',
  styleUrls: ['./standard-product-detail.component.css']
})
export class StandardProductDetailComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      sun: this.formBuilder.array([]),
      mon: this.formBuilder.array([]),
      tue: this.formBuilder.array([]),
      wed: this.formBuilder.array([]),
      thu: this.formBuilder.array([]),
      fri: this.formBuilder.array([]),
      sat: this.formBuilder.array([])
    });

    ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].forEach(day => this.setDefaultBussinessHoursForWeekDay(day));
  }

  private setDefaultBussinessHoursForWeekDay(day: string): void {
    this.formGroup.setControl(day, this.setTimeRangeForm(
      [
        { id: 1, from: '09:00', to: '22:00' }
      ]));
  }

  private setTimeRangeForm(ranges: TimePickerRange[]) {
    return this.formBuilder.array(ranges.map(x => this.timeRangeForm(x)));
  }

  private timeRangeForm(range: TimePickerRange): FormGroup {
    return this.formBuilder.group({
      id: range.id,
      from: [range.from, Validators.required],
      to: [range.to, Validators.required]
    });
  }

  public ngOnInit(): void {
  }
}
