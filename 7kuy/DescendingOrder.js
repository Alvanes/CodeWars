function descendingOrder(n){
  let arr = n.toString().split('').sort(function(a, b) {
    return b - a;
  }).join('');
  return Number(arr);
}