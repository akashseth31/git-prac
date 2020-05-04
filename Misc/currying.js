function curry(fn) {
    return function curried(...a) {
        console.log('fn.length', fn.length, a.length);
        if(a.length >= fn.length) {
            return fn.apply(this, a);
        } else {
            return function(...b) {
                return curried.apply(this, [...a, ...b]);
            }
        }
    }
};

function sum(a, b, c) {
    return a + b + c;
}

const getSum = curry(sum);

console.log(getSum(1, 2));
console.log(getSum(1)(2));
