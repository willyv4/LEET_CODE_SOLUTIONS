const test1 = [7, 1, 5, 3, 6, 4];
const test2 = [7, 6, 4, 3, 1];

function maxProfit(prices) {
	if (!prices || prices.length < 2) return 0;

	let minPrice = prices[0]; // Initialize the minimum price to the price on the first day
	let maxProfit = 0; // Initialize the maximum profit to zero

	for (let i = 1; i < prices.length; i++) {
		// Update the minimum price if a lower price is encountered
		minPrice = Math.min(minPrice, prices[i]);

		// Calculate the potential profit by selling at the current price
		const potentialProfit = prices[i] - minPrice;

		// Update the maximum profit if the potential profit is greater
		maxProfit = Math.max(maxProfit, potentialProfit);
	}

	return maxProfit;
}

console.log(maxProfit(test1));
