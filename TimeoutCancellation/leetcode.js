/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1]) {
      result = nums[i] + nums[i + 1];
      if (result === target) {
        return result;
      }
    }
  }
};
(nums = [2, 7, 11, 15]), (target = 9);

twoSum(nums, target);
