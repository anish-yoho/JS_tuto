var memoize = function (fn) {
  const cache = {}; // Manual cache, an object to store results
  let callCount = 0; // To keep track of how many times fn is called

  // The memoized function
  const memoizedFn = function (...args) {
    let key = args.join(","); // Simple key generation

    // Check if the result is already cached
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      // Call the original function and cache the result
      callCount++;
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };

  // Attach the getCallCount method to the memoized function
  memoizedFn.getCallCount = function () {
    return callCount;
  };

  return memoizedFn;
};

// Example Usage:

// Sum function
function sum(a, b) {
  return a + b;
}

// Memoized sum
const memoizedSum = memoize(sum);

// Test the memoized function
console.log(memoizedSum(2, 2)); // Call sum(2, 2), should return 4
console.log(memoizedSum(2, 2)); // Use cached result, should return 4
console.log(memoizedSum(1, 2)); // Call sum(1, 2), should return 3
console.log(memoizedSum.getCallCount()); // Call count should be 2
