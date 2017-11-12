import { Util } from './util';
import { TimePicker } from '../models/date-time/time-picker';

export class RegexParser {

    public static getTimeStamp(src: string): TimePicker {
        let time: TimePicker;

        if (Util.hasValue(src)) {
            const split = src.split(':');

            if (+split[0] >= 0 && +split[0] < 24 && +split[1] >= 0 && +split[1] < 59) {

                time = new TimePicker();
                time.h = split[0];
                time.m = split[1];
            }

        }
        return time;
    }
}
