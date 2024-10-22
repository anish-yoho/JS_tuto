const StringExpansion1 = (data) => {
  let result = "";
  const SplittedData = data.match(/[a-zA-Z]\d{1,2}/g);
  for (let i = 0; i < SplittedData.length; i++) {
    const num = parseInt(SplittedData[i].slice(1));
    const char = SplittedData[i][0];
    result += char.repeat(num);
  }
  return result;
};
console.log(StringExpansion1("a1b22c3"));

function StringExpansion2(data) {
  let result = "";
  const SplittedData = data.match(/[a-zA-Z]\d{1,2}/g);
  SplittedData.forEach((match) => {
    let num = match.slice(1);
    let char = match[0];
    result += char.repeat(num);
  });
  return result;
}
console.log(StringExpansion2("a1b22c3"));
