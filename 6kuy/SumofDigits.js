function digital_root(n) {
  let sum = 0;
  let arr = n.toString(10).split('').map(int => parseInt(int, 10));
  for (let i=0;i<arr.length;i++){
    sum += arr[i];
      };
  function sumofel(newsum){
    let sumof = 0
    let newarr = newsum.toString(10).split('').map(int => parseInt(int, 10));
    for (let i=0;i<newarr.length;i++){
    sumof += newarr[i];
      }
    return sumof;
  }
  do {sum = sumofel(sum)} while (sum >= 10); 
  return sum;
}