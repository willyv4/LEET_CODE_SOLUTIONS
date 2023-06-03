/**
 * Finds the single non-duplicate element in a non-empty array of integers.
 * The array consists of pairs of elements where every element appears twice except for one.
 *
 * @param {number[]} nums - The non-empty array of integers.
 * @returns {number} - The single non-duplicate element.
 */

function findSingleNonDuplicate(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums.length === 1) {
      return nums[i];
    } else if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = true;
    } else {
      delete obj[nums[i]];
    }
  }

  const res = Object.keys(obj)[0];
  return parseInt(res);
}
