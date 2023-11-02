const rotate = (nums, k) => {
  k %= nums.length;

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
