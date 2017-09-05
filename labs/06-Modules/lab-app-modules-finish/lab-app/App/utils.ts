export default function hex(strings, ...keys) {
    let retValue = '';

    strings.forEach((s, i) => {
        retValue += s;

        if (keys[i]) {
            retValue += `0x${(keys[i] || '').toString(16).toUpperCase()}`
        }
    });

    return retValue;
}

export function logMethod(prefix) {
    return function (target, key, descriptor) {
        console.dir(descriptor);
        var originalMethod = descriptor.value;

        console.log(prefix, 'evaluating');

        descriptor.value = function (...args) {

            console.log(prefix, 'before!');
            const result = originalMethod.apply(this, args);
            console.log(prefix, 'after!');

            return result;
        }

        return descriptor;
    }
}
