import { ActivatedRoute, Router } from '@angular/router';
import { StandardProductService } from '../standard-product.service';
import { StandardProductSharedMethodService } from './standard-product-shared-method.service';
import {
  TimeRangePickerComponent,
} from '../../../../shared/comps/forms/date-time-picker/time-range-picker/time-range-picker.component';
import { ValidationService } from '../../../../shared/services/validation/validation.service';
import { TimePicker, TimeRangePicker } from '../../../../shared/models/date-time/time-picker';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-product-detail',
  templateUrl: './standard-product-detail.component.html',
  styleUrls: ['./standard-product-detail.component.css'],
  providers: [StandardProductSharedMethodService]
})
export class StandardProductDetailComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
    private spService: StandardProductService,
    private shared: StandardProductSharedMethodService
  ) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      name: '',
      price: '',
      description: '',
      quantity: '',
      daysInAWeek: '',
      sun: this.formBuilder.array([]),
      mon: this.formBuilder.array([]),
      tue: this.formBuilder.array([]),
      wed: this.formBuilder.array([]),
      thu: this.formBuilder.array([]),
      fri: this.formBuilder.array([]),
      sat: this.formBuilder.array([]),
      startDate: '',
      endDate: '',
      tillICancel: '',
      useGPS: '',
      useProfileAddress: '',
      address1: '',
      address2: '',
      country: '',
      state: '',
      city: '',
      postcode: ''
    });

    ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].forEach(day => this.setDefaultBussinessHoursForWeekDay(day));
  }

  private setDefaultBussinessHoursForWeekDay(day: string): void {
    this.formGroup.setControl(day, this.setTimeRangeForm(
      [
        { id: 1, from: { h: '09', m: '00' }, to: { h: '05', m: '00' } }
      ]));
  }

  private setTimeRangeForm(ranges: TimeRangePicker[]) {
    return this.formBuilder.array(ranges.map(x => this.shared.timeRangeForm(x)));
  }

  public save(): void {
    this.spService.post(this.formGroup.getRawValue()).subscribe(success => {
      this.gotoMyStore();
    });
  }

  public cancel(): void {
    this.gotoMyStore();
  }

  private gotoMyStore(): void {
    this.router.navigate(['/content/mystore']);
  }

  public ngOnInit(): void {
  }
}

