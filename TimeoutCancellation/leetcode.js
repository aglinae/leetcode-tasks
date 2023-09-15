/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var cancellable = function (fn, args, t) {
  let timeoutId = null;
  function cancelFn() {
    if (timeoutID !== null) {
      clearTimeout(timeoutId);
    }
  }
  timeoutId = setTimeout(() => {
    fn(...args);
    timeoutId = null;
  }, t);
  return cancelFn;
};
