export class TimePicker {
  public h: string;
  public m: string;
  constructor() {
    this.h = '09';
    this.m = '00';
  }
}

export class TimeRangePicker {
  public from: TimePicker;
  public to: TimePicker;
  public id: number;
  constructor() {
    this.from = new TimePicker();
    this.to = new TimePicker();
  }
}
