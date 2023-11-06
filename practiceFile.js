// function sumThree(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       const sum = nums[left] + nums[right] + nums[i];

//       if (sum === target) {
//         return [i, left, right];
//       } else if (sum < target) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }

//   return [];
// }

function sumThree2(nums, target) {
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (sum === target) {
          return [i, j, k];
        }
      }
    }
  }

  return [];
}

// console.log(sumThree([1, 2, 3, 4, 5, 6], 8));

// function removeDuplicates(nums) {
//   const seen = new Set();
//   const seen2 = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (seen2.has(nums[i])) {
//       nums.splice(i, 1)[0];
//       i--;
//     }
//     if (seen.has(nums[i])) {
//       seen2.add(nums[i]);
//     }
//     seen.add(nums[i]);
//   }

//   return nums.length;
// }

const myArray = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(sumThree2(myArray, 9));
// console.log(sumThree2(myArray, 9));
