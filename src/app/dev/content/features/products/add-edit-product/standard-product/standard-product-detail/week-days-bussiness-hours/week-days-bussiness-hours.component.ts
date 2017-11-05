import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../../../shared/services/validation/validation.service';
import { selector } from 'rxjs/operator/publish';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-week-days-bussiness-hours',
  templateUrl: './week-days-bussiness-hours.component.html',
  styleUrls: ['./week-days-bussiness-hours.component.css']
})
export class WeekDaysBussinessHoursComponent implements OnInit {

  private formGroup: FormGroup;
  private closeResult: string;
  private timeRangeFormGroup: FormGroup;
  @Input() day: any;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService) {

    this.formGroup = this.formBuilder.group({
      xday: this.formBuilder.array([{ id: 1, from: '09:00', to: '12:00' }]),
    });
  }

  get xday(): FormArray {
    return this.day.data;
  }

  private addTimeRange(content: any): void {
  }

  private editTimeRange(fg: FormGroup, content: any) {

    this.timeRangeFormGroup = fg;

  }

  private deleteTimeRange(index: number, day: FormArray): void {
    day.removeAt(index);
  }

  ngOnInit() {
  }

}
