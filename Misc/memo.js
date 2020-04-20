/**
 * React Memo
 * @param {*} a 
 * @param {*} b 
 */

function add(a, b) {
    console.log('called', a, b);
    return a + b;
}
function memo(fn) {
    const set = new Map();
    // console.log(args, set.has(args));
    return function(...rest) {
        console.log(rest, set);
        if(set.has(rest.toString())) {
            return set.get(rest.toString());
        }
        const res = fn(...rest);
        set.set(rest.toString(), res);
        return res;
    }
}

const m = memo(add);

console.log(m(1,2));
console.log(m(2,1));
console.log(m(1,2));