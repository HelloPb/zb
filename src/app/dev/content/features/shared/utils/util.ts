import { Subscription } from 'rxjs/Subscription';

export class Util {

    public static hasValue(src: any): boolean {
        let bRet = true;
        if (src == null || src === undefined || src === '') {
            bRet = false;
        }
        return bRet;
    }

    public static unsubscribe(subsciption: Subscription[]): void {
        subsciption.forEach(x => x.unsubscribe());
    }

}
