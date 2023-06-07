const removeDuplicates = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
      if (count > 1) {
        nums.splice(i, 1);
        i--;
      }
    } else {
      count = 0;
    }
  }
  return nums.length;
};
