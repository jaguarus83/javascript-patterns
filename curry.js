// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
};

console.log('working');

let add = curry((x, y) => x + y);
let add2 = add(2, 4);
// let add5 = add2(5);
console.log(add2);