// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const checkSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

const findFirstIndex = (arr, item) => {
  return arr.indexOf(item);
};

const findLastIndex = (arr, item) => {
  return arr.lastIndexOf(item);
};

var twoSum = function (nums, target) {
  if (nums.length === 0) return 0;

  let numsArray = [];
  numsArray = numsArray.concat(nums);

  if (!checkSorted(numsArray)) {
    numsArray.sort();
  }

  (lhs = 0), (rhs = numsArray.length - 1);
  while (lhs < rhs && lhs !== rhs) {
    if (numsArray[lhs] + numsArray[rhs] === target) {
      return [
        findFirstIndex(nums, numsArray[lhs]),
        findLastIndex(nums, numsArray[rhs]),
      ];
    } else if (numsArray[lhs] + numsArray[rhs] > target) {
      rhs--;
    } else {
      lhs++;
    }
  }
};

// (nums = [2, 7, 11, 15]), (target = 9);
// (nums = [3, 2, 3]), (target = 6);
// (nums = [3, 2, 4]), (target = 6);
// (nums = []), (target = 6);
// (nums = [-1,-2,-3,-4,-5]), (target = -8);

console.log(twoSum(nums, target));
