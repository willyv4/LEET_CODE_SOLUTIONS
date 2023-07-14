const majorityElement = function (nums) {
  let obj = {};

  nums.map((n) => {
    !obj.hasOwnProperty(n) ? (obj[n] = 1) : obj[n]++;
  });

  for (let key in obj) {
    if (obj[key] > nums.length / 2) return key;
  }
};

// solution i like better
const majorityElement = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 0;

    obj[nums[i]] += 1;

    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};

// majorityElement([3, 2, 3]); // 3
majorityElement([2, 2, 1, 1, 1, 2, 2]); // 2
