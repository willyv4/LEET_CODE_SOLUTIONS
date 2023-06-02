/**
 * Removes duplicate elements from a sorted integer array in-place, such that each unique element appears only once.
 * The relative order of the elements is maintained.
 *
 * @param {number[]} nums - The sorted array of integers.
 * @returns {number} - The number of unique elements after removing duplicates.
 */

const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      if (i !== -1) nums.splice(i, 1);
    }
  }
  return nums.length;
};
