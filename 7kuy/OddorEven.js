function oddOrEven(array) {
  let sum = 0;
  for (let i=0;i<array.length;i++){
    sum += array[i]; 
  }
  if (Math.floor(sum / 2) == sum / 2) {
  return "even";} 
  return "odd";
}