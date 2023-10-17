function isCenterInsideTriangle(x1, x2) {
	// Check if the center is inside the triangle
	return x1 < 1 / 2 && x2 > 1 / 2 - x1 && x2 < 1 / 2 + x1;
}

function simulateTrials(numTrials) {
	let centerInsideCount = 0;

	for (let i = 0; i < numTrials; i++) {
		// Generate random points on the unit circle
		const point1 = Math.random(); // Position of the first point
		const point2 = Math.random(); // Position of the second point

		// Check if the center is inside the triangle
		if (isCenterInsideTriangle(point1, point2)) {
			centerInsideCount++;
		}
	}

	return centerInsideCount / numTrials;
}

const numTrials = 1000000; // Number of trials to simulate
const probability = simulateTrials(numTrials);

console.log(`The estimated probability is approximately ${probability}`);
