function encode(arr) {
  let countChars = {};
  let res = [];

  for (let str of arr) {
    countChars[str] = str.length;
  }

  for (let key in countChars) {
    res.push(countChars[key]);
    res.push("#");
    res.push(key);
  }

  return decode(res.join(""));
}

function decode(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let arr = [];
    let count;
    if (!isNaN(str[i])) {
      count = parseInt(str[i]);
    }

    while (count > -1) {
      count--;
      i++;
      arr.push(str[i]);
    }
    arr.shift();
    result.push(arr.join(""));
  }

  return result;
}

console.log(encode(["lint", "code", "love", "you"]));
