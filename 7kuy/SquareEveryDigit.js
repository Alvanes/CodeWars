function squareDigits(num){
  let arr = num.toString(10).split('').map(int => parseInt(int, 10));
  for (let i=0;i<arr.length;i++) {
    arr[i] = Math.pow(arr[i],2); }
  return Number(arr.join(""));
}