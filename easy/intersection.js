function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = new Set();
  const max = Math.max(nums1.length, nums2.length);
  for (let i = 0; i < max; i++) {
    if (set1.has(nums1[i]) && set2.has(nums1[i])) result.add(nums1[i]);
    if (set1.has(nums2[i]) && set2.has(nums2[i])) result.add(nums2[i]);
  }

  return Array.from(result);
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
