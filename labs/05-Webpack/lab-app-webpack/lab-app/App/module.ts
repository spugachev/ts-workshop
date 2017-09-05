export class MyLogger {
    constructor(private _prefix: string) {

    }

    log(msg: string) {
        console.log(`${this._prefix}:`, msg);
    }
}
