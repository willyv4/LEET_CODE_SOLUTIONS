// @TODO: to study
const reverse = (nums, start, end) => {
  while (start < end) {
    nums[start] = nums[start] ^ nums[end];
    nums[end] = nums[start] ^ nums[end];
    nums[start] = nums[start] ^ nums[end];
    start++;
    end--;
  }
};

const rotate = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

rotateArray([1, 2, 3, 4, 5, 6, 7], 3); //[5,6,7,1,2,3,4]
rotateArray([-1, -100, 3, 99], 2); //[3,99,-1,-100]
rotateArray([1, 2], 3); // [2,1]
rotateArray([1, 2, 3], 4); // [3,1,2]
