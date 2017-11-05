import { TimePicker } from '../models/date-time/time-picker';

export class RegexParser {

    public static hasValue(src: any): boolean {
        let bRet = true;
        if (src == null || src === undefined || src === '') {
            bRet = false;
        }
        return bRet;
    }

    public static getTimeStamp(src: string): TimePicker {
        let time: TimePicker;

        if (this.hasValue(src)) {
            const split = src.split(':');

            if (+split[0] >= 0 && +split[0] < 24 && +split[1] >= 0 && +split[1] < 59) {

                time = new TimePicker();
                time.hour = split[0];
                time.minute = split[1];
            }

        }
        return time;
    }
}
