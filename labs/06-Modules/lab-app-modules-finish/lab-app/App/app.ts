import hex, * as utils from './utils';
import { Fib } from './fib';

const btnGenerate = document.getElementById('btnGenerate');
const content = document.getElementById('content');

btnGenerate.addEventListener('click', () => {
    const fib = new Fib({ from: 10, to: 140 });

    for (const [n, i] of fib.generate()) {
        const div = document.createElement('div');
        div.setAttribute('class', 'alert alert-primary');
        div.innerText = hex`#${i}: ${n}`;
        content.appendChild(div);
    }
});
