function getMiddle(s){
  let arr = [];
  let i = 0;
  let str = "";
  arr = s.split('');
  if (arr.length % 2 == 0) {
    i = arr.length / 2;
    str = arr[i-1] + arr[i];
  }
  if (arr.length % 2 !== 0) {
    i = Math.ceil(arr.length / 2);
    str = arr[i-1];
  }
  return str;
}