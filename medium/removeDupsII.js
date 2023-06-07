const removeDuplicates = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
      // if count is greater than two delete num
      if (count > 1) {
        nums.splice(i, 1);
        // Decrement the index to reevaluate the current position after removing the duplicate.
        i--;
      }
    } else {
      count = 0;
    }
  }
  return nums.length;
};
