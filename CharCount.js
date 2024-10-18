function charCount(input) {
  let result = {};
  for (let tempVal of input) {
    tempVal = tempVal.toLowerCase();
    result[tempVal] > 0 ? result[tempVal]++ : (result[tempVal] = 1);
  }
  return result;
}
console.log(charCount("aabbccdd"));
