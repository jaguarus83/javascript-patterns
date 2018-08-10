function factorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

function memoize(fundamental, cache) {
  var cache = cache || {};

  var shell = function (arg) {
    console.log('iter');
    if (!cache.hasOwnProperty(arg)) {
      cache[arg] = fundamental(arg);
    }

    return cache[arg];
  };

  return shell;

}

const memoize = (f) => {
  const cache = {};

  return (...args) => {
    const argsStr = JSON.stringify(args);
    cache[argsStr] = cache[argsStr] || f(...args);

    return cache[argsStr];
  }
}

var memFactorial = memoize(factorial, { "О": 1, "1": 1 });

console.log(memFactorial(4));
console.log(memFactorial(5));
console.log(memFactorial(6));
