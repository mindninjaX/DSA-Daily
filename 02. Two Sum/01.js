// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
  if (nums.length === 0) return 0;

  arr = nums;
  //   arr = nums.sort();

  (lhs = 0), (rhs = arr.length - 1);
  while (lhs < rhs && lhs !== rhs) {
    if (arr[lhs] + arr[rhs] === target) {
      return [lhs, rhs];
    } else if (arr[lhs] + arr[rhs] > target) {
      rhs--;
    } else {
      lhs++;
    }
  }
};

// (nums = [2, 7, 11, 15]), (target = 9);
(nums = [3, 2, 3]), (target = 6);

console.log(twoSum(nums, target));
