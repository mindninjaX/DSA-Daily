function removeDuplicates(nums) {
  const minNum = nums[0];
  const highNum = nums[nums.length - 1];
  let currentValue = minNum;
  let k = 0;

  for (i = 0; i <= highNum; i++) {
    if (currentValue === nums[i - 1]) {
      continue;
    } else {
      nums[i] = currentValue;
      currentValue++;
      k++;
    }
  }

  return k;
}

// Test Cases:
// nums = [1, 1, 2];
// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// nums = [2, 2, 2, 2, 2];
// nums = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// nums = [0, 0, 0, 0, 3];

console.log(removeDuplicates(nums));
