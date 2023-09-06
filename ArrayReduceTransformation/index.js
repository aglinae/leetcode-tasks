/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  nums.forEach((element) => {
    init = fn(parseInt(init), parseInt(element));
  });
  return init;
};

let nums = [1, 2, 3, 4];
let init = 100;

fn = function sum(accum, curr) {
  return accum + curr * curr;
};

let newArr = reduce(nums, fn, init);

console.log(newArr);
