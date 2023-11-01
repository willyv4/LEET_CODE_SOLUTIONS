const compress = (string) => {
  let obj = {};
  const size = string.length;

  for (let char of string) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }

  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    string.push(keys[i]);
    string.push(values[i].toString());
  }

  return string.splice(size, size);
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
