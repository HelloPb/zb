export class TimePicker {
  public hour: string;
  public minute: string;
  constructor() {
    this.hour = '09';
    this.minute = '00';
  }
}

export class TimePickerRange {
  public from: string;
  public to: string;
  public id: number;
}
