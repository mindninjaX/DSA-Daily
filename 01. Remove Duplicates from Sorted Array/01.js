function removeDuplicates(nums) {
  let i = 0;

  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

// Test Cases:
// nums = [1, 1, 2];
// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// nums = [2, 2, 2, 2, 2];
// nums = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// nums = [0, 0, 0, 0, 3];

console.log(removeDuplicates(nums));