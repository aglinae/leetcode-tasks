/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let newArr = [];
  arr.forEach((element, i) => {
    // newArr.push(fn(arr[i], element));
    if (fn(arr[i], i)) {
      newArr.push(element);
    }
  });
  return newArr;
};

const arr = [0, 10, 20, 30];
// fn = function greaterThan10(n) {
//   return n > 10;
// };
fn = function firstIndex(n, i) {
  return i === 0;
};
const newArray = filter(arr, fn);
console.log(newArray);
