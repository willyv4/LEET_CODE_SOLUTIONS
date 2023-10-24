const hasCycle = function (head) {
	// Initialize two pointers, slow and fast, both at the head of the list.
	let slow = head;
	let fast = head;

	// Traverse the list using the slow and fast pointers.
	while (fast && fast.next && fast.next.next) {
		// Move the slow pointer one step at a time.
		slow = slow.next;

		// Move the fast pointer two steps at a time.
		fast = fast.next.next;

		// If the fast pointer catches up with the slow pointer, a cycle exists.
		if (slow === fast) {
			return true; // Cycle detected, return true.
		}
	}

	// If the loop completes without finding a cycle, return false.
	return false; // No cycle detected.
};
