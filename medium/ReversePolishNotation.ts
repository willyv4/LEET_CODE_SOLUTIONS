function evalRPN(tokens: string[]): number {
  let stack = [];

  for (let itm of tokens) {
    if (itm === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (itm === "-") {
      const [first, second] = [stack.pop(), stack.pop()];
      stack.push(second - first);
    } else if (itm === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (itm === "/") {
      const [first, second] = [stack.pop(), stack.pop()];
      stack.push(Math.trunc(second / first));
    } else {
      stack.push(parseInt(itm));
    }
  }

  return stack[0];
}

function evalRPN2(tokens: string[]): number {
  let stack: number[] = [];
  tokens.forEach((tkn) => {
    if (!isNaN(parseInt(tkn))) {
      stack.push(Number(tkn));
    } else {
      const [a, b] = [stack.pop()!, stack.pop()!];
      if (tkn == "+") stack.push(b + a);
      if (tkn == "-") stack.push(b - a);
      if (tkn == "*") stack.push(b * a);
      if (tkn == "/") stack.push(Math.trunc(b / a));
    }
  });
  return stack.pop()!;
}
console.log(evalRPN2(["2", "1", "+", "3", "*"]));
