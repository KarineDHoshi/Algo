function hasSum(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasSum([10, 15, 3, 7], 17)); 
console.log(hasSum([1, 8, 10, 21], 19));
