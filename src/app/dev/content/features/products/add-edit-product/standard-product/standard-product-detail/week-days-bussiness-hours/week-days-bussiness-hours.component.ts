import { StandardProductSharedMethodService } from '../standard-product-shared-method.service';
import { Util } from '../../../../../shared/utils/util';
import {
  TimeRangePickerComponent,
} from '../../../../../shared/comps/forms/date-time-picker/time-range-picker/time-range-picker.component';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../../../shared/services/validation/validation.service';
import { selector } from 'rxjs/operator/publish';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-week-days-bussiness-hours',
  templateUrl: './week-days-bussiness-hours.component.html',
  styleUrls: ['./week-days-bussiness-hours.component.css']
})
export class WeekDaysBussinessHoursComponent implements OnInit {

  private formGroup: FormGroup;
  @Input() day: any;

  constructor(
    private formBuilder: FormBuilder,
    private shared: StandardProductSharedMethodService,
    private validationService: ValidationService,
    public dialog: MatDialog
  ) {

    this.formGroup = this.formBuilder.group({
      xday: this.formBuilder.array([]),
    });
  }

  get xday(): FormArray {
    return this.formGroup.get('xday') as FormArray;
  }

  private addTimeRange(): void {

    const fg = this.shared.timeRangeForm({ id: 1, from: { h: '09', m: '00' }, to: { h: '05', m: '00' } });

    const dialogRef = this.dialog.open(TimeRangePickerComponent, {
      width: '250px',
      data: { formGroup: fg }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.xday.push(fg);
      }
    });
  }

  private editTimeRange(fg: FormGroup) {

    const r = fg.getRawValue();

    const fnew = this.shared.timeRangeForm({ id: r.id, from: { h: r.from.h, m: r.from.m }, to: { h: r.to.h, m: r.to.m } });

    const dialogRef = this.dialog.open(TimeRangePickerComponent, {
      width: '250px',
      data: { formGroup: fnew }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {

        const f = fnew.getRawValue();

        fg.controls['from'].patchValue({ h: f.from.h, m: f.from.m });
        fg.controls['to'].patchValue({ h: f.to.h, m: f.to.m });

      }
    });
  }

  private deleteTimeRange(index: number, day: FormArray): void {
    day.removeAt(index);
  }

  ngOnInit() {
    this.formGroup.setControl('xday', this.day.data);
  }

}
