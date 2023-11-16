/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  let result = [];
  // sort nums
  nums.sort((a, b) => a - b);

  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // if index greater than 0 and num and next === continue
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      // sum current num and left and right
      const threeSum = nums[i] + nums[left] + nums[right];

      // if threeSum greater than 0 right dectrement
      if (threeSum > 0) {
        right--;
        // if threeSum less than 0 left increment
      } else if (threeSum < 0) {
        left++;
      } else {
        // else push [curr, left, right]
        result.push([nums[i], nums[left], nums[right]]);
        // increment left
        left++;
        // while left === left next && left less than right left++
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
