const isPossible = (string) => {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let count = 0;
  const hash = initHash(string);

  for (let key in hash) {
    if (string.length % 2 === 0) {
      if (obj[key] % 2 !== 0) return false;
    } else {
      if (obj[key] % 2 !== 0) count++;
      if (count > 1) return false;
    }
  }

  return true;
};

function initHash(string) {
  obj = {};
  for (let ltr of string) obj[ltr] ? (obj[ltr] += 1) : (obj[ltr] = 1);
  return obj;
}

module.exports = { isPossible };
