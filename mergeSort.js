function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let midpointIndex = Math.floor((arr.length) / 2);
  let leftArr = arr.slice(0,midpointIndex);
  let rightArr = arr.slice(midpointIndex);
  console.log(leftArr, rightArr);
  return [
    ...mergeSort(leftArr),
    ...mergeSort(rightArr)
  ];
}

console.log(mergeSort([3,1,2,7,0]));

