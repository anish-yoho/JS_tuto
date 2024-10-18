var expect = function (val) {
  return {
    tobe: function (val1) {
      return val === val1 ? true : "Not Equal";
    },
    notTobe: function (val2) {
      return val !== val2 ? true : "Equal";
    },
  };
};
console.log(expect(5).tobe(5));
console.log(expect(5).notTobe(5));
