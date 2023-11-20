class MinStack {
  stack: number[];
  constructor(stack = []) {
    this.stack = stack;
  }

  push(val: number): void {
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    let min = Infinity;

    this.stack.forEach((val: number) => {
      min = Math.min(min, val);
    });

    return min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const myStack = new MinStack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log(myStack);
console.log(myStack.getMin());
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack);
