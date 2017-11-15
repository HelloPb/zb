import { TimeRangePicker } from '../date-time/time-picker';

export class StandardProduct {
    public name: string;
    public price: string;
    public description: string;
    public quantity: string;
    public daysInAWeek: string;
    public sun: TimeRangePicker[];
    public mon: TimeRangePicker[];
    public tue: TimeRangePicker[];
    public wed: TimeRangePicker[];
    public thu: TimeRangePicker[];
    public fri: TimeRangePicker[];
    public sat: TimeRangePicker[];
    public startDate: string;
    public tillICancel: string;
    public endDate: string;
    public useGPS: string;
    public useProfileAddress: string;
    public address1: string;
    public address2: string;
    public country: string;
    public state: string;
    public city: string;
    public postcode: string;
    public createdDate: string;

    constructor() {
        this.name = '';
        this.price = '';
        this.description = '';
        this.quantity = '';
        this.daysInAWeek = '';
        this.sun = [];
        this.mon = [];
        this.tue = [];
        this.wed = [];
        this.thu = [];
        this.fri = [];
        this.sat = [];
        this.startDate = '';
        this.endDate = '';
        this.tillICancel = '';
        this.useGPS = '';
        this.useProfileAddress = '';
        this.address1 = '';
        this.address2 = '';
        this.country = '';
        this.state = '';
        this.city = '';
        this.postcode = '';
        this.createdDate = '';
    }
}
