import * as utils from './utils';

export class Fib {
    private _from;
    private _to;

    get from() {
        return this._from;
    }

    get to() {
        return this._to;
    }

    constructor({ from = 0, to = 100 } = {}) {
        this._from = from;
        this._to = to;
    }

    @utils.logMethod('test:')
    *generate() {
        let a = 0;
        let b = 1;

        for (let i = 2; i <= this._to; i++) {
            const n = a + b;
            a = b;
            b = n;

            if (i >= this._from) {
                yield [n, i];
            }
        }
    }
}
