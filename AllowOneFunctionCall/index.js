/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let funcOnce = false;

  return function (...args) {
    if (!funcOnce) {
      funcOnce = true;
      return fn(...args);
    } else {
      return;
    }
  };
};

let fn = (a, b, c) => a + b + c;

const onceFn = once(fn);
console.log(onceFn(1, 2, 3));

console.log(onceFn(2, 3, 6));
