// @TODO: to study
const rotate = (nums, k) => {
  const n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
};

const reverse = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

rotateArray([1, 2, 3, 4, 5, 6, 7], 3); //[5,6,7,1,2,3,4]
rotateArray([-1, -100, 3, 99], 2); //[3,99,-1,-100]
rotateArray([1, 2], 3); // [2,1]
rotateArray([1, 2, 3], 4); // [3,1,2]
