const majorityElement = function (nums) {
  let obj = {};

  nums.map((n) => {
    !obj.hasOwnProperty(n) ? (obj[n] = 1) : obj[n]++;
  });

  for (let key in obj) {
    if (obj[key] > nums.length / 2) return key;
  }
};
