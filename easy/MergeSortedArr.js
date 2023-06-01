/**
 * Merge two sorted arrays in-place.
 *
 * @param {number[]} n1 - The first sorted array with extra space at the end.
 * @param {number} m - The number of elements in n1 (excluding the extra space).
 * @param {number[]} n2 - The second sorted array.
 * @param {number} n - The number of elements in n2.
 * @returns {number[]} - The merged and sorted array.
 *
 * @example
 * // Example 1:
 * const n1 = [1,2,3,0,0,0];
 * const m = 3;
 * const n2 = [2,5,6];
 * const n = 3;
 * merge(n1, m, n2, n);
 * // Output: [1,2,2,3,5,6]
 * // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * // The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from n1.
 *
 * @example
 * // Example 2:
 * const n1 = [1];
 * const m = 1;
 * const n2 = [];
 * const n = 0;
 * merge(n1, m, n2, n);
 * // Output: [1]
 * // Explanation: The arrays we are merging are [1] and [].
 * // The result of the merge is [1].
 */

/**
 * @EXPLANATION
 * calculate difference of n1 (length) and m
 * n1 length from difference
 * iterate through n2 and add each num to n1
 * sort through n1 from least to greatest
 */

function merge(n1, m, n2, n) {
  n1.splice(n1.length - (n1.length - m));
  n2.map((num) => n1.push(num));
  return n1.sort((a, b) => a - b);
}
