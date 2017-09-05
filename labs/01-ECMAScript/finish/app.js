"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const btnGenerate = document.getElementById('btnGenerate');
const content = document.getElementById('content');
function hex(strings, ...keys) {
    let retValue = '';
    strings.forEach((s, i) => {
        retValue += s;
        if (keys[i]) {
            retValue += `0x${(keys[i] || '').toString(16).toUpperCase()}`;
        }
    });
    return retValue;
}
function logMethod(prefix) {
    return function (target, key, descriptor) {
        console.dir(descriptor);
        var originalMethod = descriptor.value;
        console.log(prefix, 'evaluating');
        descriptor.value = function (...args) {
            console.log(prefix, 'before');
            const result = originalMethod.apply(this, args);
            console.log(prefix, 'after');
            return result;
        };
        return descriptor;
    };
}
class Fib {
    constructor({ from = 0, to = 100 } = {}) {
        this._from = from;
        this._to = to;
    }
    get from() {
        return this._from;
    }
    get to() {
        return this._to;
    }
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
__decorate([
    logMethod('test:'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Fib.prototype, "generate", null);
btnGenerate.addEventListener('click', () => {
    const fib = new Fib({ from: 10, to: 140 });
    for (const [n, i] of fib.generate()) {
        const div = document.createElement('div');
        div.setAttribute('class', 'alert alert-primary');
        div.innerText = hex `#${i}: ${n}`;
        content.appendChild(div);
    }
});
