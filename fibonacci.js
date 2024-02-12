function fibs(num) {
  let arr = [0,1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

function fibsRecDefaultParams(num, arr = [1,0], i = 2) {
  if (num === 1) return [0];
  if (i === num) return arr.reverse();

  arr.unshift(arr[0] + arr[1]);
  return fibsRecDefaultParams(num, arr, i + 1);
}

function fibsRec(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0,1];
  } else {
    return [
      ...fibsRec(num-1), 
      fibsRec(num - 1).at(-1) + fibsRec(num - 2).at(-1)
    ];
  }
}

console.log(
  'fibsRec(8) returns:',
  fibsRec(8)
);
