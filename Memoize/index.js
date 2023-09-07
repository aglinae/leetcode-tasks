const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));
console.log(memoizedSum([]));
console.log(memoizedSum(1, 2));
console.log(memoizedSum([]));
