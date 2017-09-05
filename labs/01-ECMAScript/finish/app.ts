const btnGenerate = document.getElementById('btnGenerate');
const content = document.getElementById('content');

function hex(strings, ...keys) {
    let retValue = '';

    strings.forEach((s, i) => {
        retValue += s;

        if(keys[i]){
            retValue +=  `0x${(keys[i] || '').toString(16).toUpperCase()}`
        }
    });

    return retValue;
}

function logMethod(prefix){
    return function (target, key, descriptor) {
        console.dir(descriptor);
        var originalMethod = descriptor.value;

        console.log(prefix, 'evaluating');

        descriptor.value = function (...args) {

            console.log(prefix, 'before');
            const result = originalMethod.apply(this, args);
            console.log(prefix, 'after');

            return result;
        }

        return descriptor;
    }
}


class Fib {
    private _from;
    private _to;

    get from(){
        return this._from;
    }

    get to(){
        return this._to;
    }

    constructor({from = 0, to = 100} = {}){
        this._from = from;
        this._to = to;
    }

    @logMethod('test:')
    *generate(){
        let a = 0;
        let b = 1;

        for(let i=2;i<=this._to;i++){
            const n = a + b;
            a = b;
            b = n;
            
            if(i>=this._from){
                yield [n, i];
            }
        }
    }
}

btnGenerate.addEventListener('click', () => {
    const fib = new Fib({from: 10, to: 140});  

    for(const [n, i] of fib.generate()){
        const div = document.createElement('div');
        div.setAttribute('class', 'alert alert-primary');
        div.innerText = hex`#${i}: ${n}`;
        content.appendChild(div);
    }
});


    