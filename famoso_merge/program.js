const fs = require('fs');

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result[k++] = left[i++];
    } else {
      result[k++] = right[j++];
    }
  }

  while (i < left.length) {
    result[k++] = left[i++];
  }

  while (j < right.length) {
    result[k++] = right[j++];
  }

  return result;
};

const data = fs.readFileSync('list.txt', 'utf8');
const numbers = data.trim().split(' ').map(Number);

const sortedNumbers = mergeSort(numbers);
const numComparisons = sortedNumbers.length - 1;

console.log(`Tri fusion: ${numComparisons} comparaisons - [${sortedNumbers}]`);

