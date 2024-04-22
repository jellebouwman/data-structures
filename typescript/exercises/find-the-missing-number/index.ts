// You are given an array of distinct integers from 0, 1, 2, 3 up to N.
// The array is missing one number, return the missing one.
// Example: [0, 1, 3] => 2
//
// Assume there are no duplicate numbers,
// Assume count starts at 0

// This implementation is O(2N) speed,
// and creates a hashtable of size N
export function findMissingNumber(numberArray: number[]): number {
  if (numberArray.length === 0) {
    return 0;
  }

  const hashTableValues = {};

  // Number array misses one integer that we should check for.
  const hashTableLength = numberArray.length + 1;

  // O(N)
  for (let i = 0; hashTableLength > i; i++) {
    hashTableValues[i] = true;
  }

  // O(N)
  numberArray.forEach((n) => {
    if (!hashTableValues[n]) {
      throw new Error(`Duplicate value '${n}' found in array`);
    }
    delete hashTableValues[n];
  });

  const hashTableKeys = Object.keys(hashTableValues);

  if (hashTableKeys.length === 0) {
    throw new Error("No missing keys found in the supplied array");
  }

  if (hashTableKeys.length > 1) {
    throw new Error("Found more than one remaining key");
  }

  return Number(hashTableKeys[0]);
}

// This implementation calculates the total sum of all numbers in the array
// And compares it with the theoretical sum the array should have been
// when the missing number is included.

// We can return the number by subtracting the found sum from the full sum.
// This is more space efficient (only creates 2 ints instead of a N sized hashmap),
// time efficiency is the same O(2N)
export function findMissingNumberTwo(numberArray: number[]): number {
  let maximumSum = 0;
  let foundSum = 0;

  // Number array misses one integer that we should check for.
  const hashTableLength = numberArray.length + 1;

  // O(N)
  for (let i = 0; hashTableLength > i; i++) {
    maximumSum += i;
  }

  numberArray.forEach((n) => {
    foundSum += n;
  });

  return maximumSum - foundSum;
}
