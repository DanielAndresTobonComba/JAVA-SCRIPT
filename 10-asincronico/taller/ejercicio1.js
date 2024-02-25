const f1 = (num, ini, callback) => (num > 0) ? callback(num, f1(num-1, ini, callback)) : ini;

const f2 = (a, b) => a * b;

const r = f1(5, 1, f2);
console.log(r);
