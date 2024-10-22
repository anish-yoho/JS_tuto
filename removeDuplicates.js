//Simple Approact by using (Set) method

const removeDuplicates1 = (array) => {
  return [...new Set(array)];
};
console.log(removeDuplicates1([1, 2, 3, 4, 4, 5, 5, 5, 5]));

//without using any js inbuilt methods
const removeDuplicates2 = (array) => {
  let result = [];
  let resultIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[resultIndex] = array[i];
      resultIndex++;
    }
  }
  return result;
};
console.log(removeDuplicates2([1, 2, 3, 4, 4, 5, 5, 5, 5]));
