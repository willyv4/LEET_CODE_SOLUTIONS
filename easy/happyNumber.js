/**
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.


Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 8
64

62 42

36 + 16 = 52

5,2 2,2

25 + 4 = 29

4 + 81

8 5 

64, 25 

89

64 + 81 

145





/**
 * input is a positive integer
 * 
 * output boolean true or false
 * 
 * if the number is single digit square it
 * else split the number into single digits
 * 
 * 1 fallowed with zeros is happy 
 *  
 * track numbers in object
 * 
 * if the number is in the object return false 
 * if currNUm is 1 followed by zero return true
 * 
 * 
 * 
 */

/**
 *
 * @param {integer} num
 */

const isHappy = function (n) {
	let set = new Set();
	while (n !== 1 && !set.has(n)) set.add(n), (n = sumOfSquares(n));
	return n === 1;
};

function sumOfSquares(n) {
	let arr = n.toString().split("");
	return arr.reduce((s, digit) => s + Math.pow(digit, 2), 0);
}

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
