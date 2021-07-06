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

  console.log("🚀 ~ file: 02.js ~ line 21 ~ twoSum ~ nums", nums);
  console.log("🚀 ~ file: 02.js ~ line ~ twoSum ~ numsArray", numsArray);

  (lhs = 0), (rhs = numsArray.length - 1);
  while (lhs < rhs && lhs !== rhs) {
    // console.log(
    //   "🚀 ~ file: 02.js ~ numsArray[lhs] + numsArray[rhs]",
    //   numsArray[lhs] + numsArray[rhs]
    // );
    // console.log(
    //   "🚀 ~ file: 02.js ~ line 9 ~ twoSum ~ numsArray[rhs]",
    //   numsArray[rhs]
    // );
    // console.log(
    //   "🚀 ~ file: 02.js ~ line 9 ~ twoSum ~ numsArray[lhs]",
    //   numsArray[lhs]
    // );
    if (numsArray[lhs] + numsArray[rhs] === target) {
      // return [lhs, rhs];
      return [findFirstIndex(nums, numsArray[lhs]), findLastIndex(nums, numsArray[rhs])];
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
(nums = []), (target = 6);

console.log(twoSum(nums, target));
