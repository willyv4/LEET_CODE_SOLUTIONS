const maxArea = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  while (left < right) {
    const height = Math.min(arr[left], arr[right]);
    const width = right - left;
    const currentArea = height * width;
    maxArea = Math.max(maxArea, currentArea);
    arr[left] < arr[right] ? left++ : right--;
  }

  return maxArea;
};

console.log(maxArea([1, 2, 4, 3]));
