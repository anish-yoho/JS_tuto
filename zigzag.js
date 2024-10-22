const zigZag = (Input) => {
  let inputArray = [];
  let oddVal = [];
  let evenVal = [];
  let currentNum = "";

  for (let i = 0; i < Input.length; i++) {
    let char = Input[i];
    if (char === ",") {
      if (currentNum) {
        inputArray.push(Number(currentNum));
        currentNum = "";
      }
    } else {
      currentNum += char;
    }
    if (currentNum) {
      inputArray.push(Number(currentNum));
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    let char = inputArray[i];
    if (char % 2 == 0) {
      evenVal.push(char);
    } else {
      oddVal.push(char);
    }
  }

  const sortingASC = (array) => {
    let sorted = [...array];
    for (let i = 0; i < sorted.length - 1; i++) {
      for (let j = 0; j < sorted.length - 1 - i; j++) {
        if (sorted[i] > sorted[j]) {
          let temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      }
    }
    return sorted;
  };
  const sortingDsc = (array) => {
    let sorted = [...array];
    for (let i = 0; i < sorted.length - 1; i++) {
      for (let j = 0; j < sorted.length - 1 - i; j++) {
        if (sorted[i] < sorted[j]) {
          let temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      }
    }
    return sorted;
  };

  let sortedOdd = sortingDsc(oddVal);
  let sortedEve = sortingASC(evenVal);
  inputArray.push(sortedOdd, sortedEve);
  return inputArray;
};

console.log(zigZag("1,2,3,4,5,6,7,8,9"));
// Input: 1, 2, 3, 4, 5, 6, 7, 8, 9;
// Output: 9, 2, 7, 4, 5, 6, 3, 8, 1;

