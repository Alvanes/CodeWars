function getSum( a,b ) {
  let sum = 0,min = 0,max=0;
  min = Math.min(a,b);
  max = Math.max(a,b);
  for (min; min<=max; min++) {
   sum += min;
 }
  return sum;
}