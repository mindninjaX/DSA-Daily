// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
  if (nums.length === 0) return 0;

  i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target && i === j) {
      return [i, j];
    }
    i++;
  }
};

// (nums = [2, 7, 11, 15]), (target = 9);
(nums = [3, 2, 3]), (target = 6);

console.log(twoSum(nums, target));
