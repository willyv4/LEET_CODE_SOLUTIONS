// inputs grid arr
// outputs count
// explain the problem in my own words

/**
 * we get a 2d array and find the islands in the arr and return the number of islands
 */

// examples

/**
 * example 1: output 2
 * [
 * ["0","x","0"   ,"x","0",  "1","1","0",   "1","0"],
 * 
   ["x","x","0",  "x","0",   "1","0","0",   "1","1"],

   ["x","x","0",  "0",    "1", "1","1","0",  "1","0"],

   ["0","0","0",  "1", "0",  "1","1","0",  "1","1"],

 
	["0","1","0","1","0",   "1","1","0",   "1","0"],

	["1","1","1","1","0",   "0","1","0",   "1","0"],

	["0","1","0","1","0",  "1","0","0",     "1","0"],
   ]
 *

   islandCount 3

   example 2: output 3
   ["x","x","0","0","0"],
   ["x","x","0","0","0"],
   ["0","0","x","0","0"],
   ["0","0","0","x","x"]
 */

const numIslands = () => {
	let mySet = new Set();
};
