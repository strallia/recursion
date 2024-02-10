function fibs(num) {
  let arr = [0,1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

function fibsRec(num, arr = [1,0], i = 2) {
  if (num === 1) return [0];
  if (i === num) return arr.reverse();

  arr.unshift(arr[0] + arr[1]);
  return fibsRec(num, arr, i + 1);
}

console.log(fibsRec(8));
