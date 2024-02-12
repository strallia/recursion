function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let midpointIndex = Math.floor((arr.length) / 2);
  let leftArr = arr.slice(0,midpointIndex);
  let rightArr = arr.slice(midpointIndex);
  
  return [
    ...merge(
    mergeSort(leftArr),
    mergeSort(rightArr)
    )
  ];
}

function merge(leftArr, rightArr, leftIndex = 0, rightIndex = 0) {
  const leftArrLength = leftArr.length;
  const rightArrLength = rightArr.length;
  let sortedArr = [];

  // loop until one of the arrays completes
  while (leftIndex < leftArrLength
    && rightIndex < rightArrLength) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex++]);
    } else {
      sortedArr.push(rightArr[rightIndex++]);
    }
  }

  // append the remaining elements from the incomplete array
  if (leftIndex === leftArrLength) {
    sortedArr = [...sortedArr, ...rightArr.slice(rightIndex)];
  } else {
    sortedArr = [...sortedArr, ...leftArr.slice(leftIndex)];
  }

  return sortedArr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

