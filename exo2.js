function hasSum(arr, k) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
      const complement = k - arr[i];
      if (set.has(complement)) {
        return true;
      }
      set.add(arr[i]);
    }
    return false;
  }
  
  // Exemples d'utilisation :
  console.log(hasSum([10, 15, 3, 7], 17)); // Renvoie true
  console.log(hasSum([1, 8, 10, 21], 19)); // Renvoie false
  